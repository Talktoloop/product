"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var AirTableUserService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirTableUserService = void 0;
const common_1 = require("@nestjs/common");
const helpers_1 = require("../../common/helpers");
const axios_1 = __importDefault(require("axios"));
const user_repository_1 = require("../../user/repository/user.repository");
const di_constant_1 = require("../../common/constant/di.constant");
const config_1 = require("@nestjs/config");
const organisation_application_repository_1 = require("../../user/repository/organisation-application.repository");
const airtable_organisation_service_1 = require("./airtable-organisation.service");
const organisation_repository_1 = require("../../organisation/organisation.repository");
const registration_status_constant_1 = require("../../user/constant/registration-status.constant");
const helpers_2 = require("../../common/helpers");
const axios_rate_limit_1 = __importDefault(require("axios-rate-limit"));
let AirTableUserService = AirTableUserService_1 = class AirTableUserService {
    constructor(userRepository, config, organisationApplicationRepository, airTableOrganisationService, organisationRepository) {
        this.userRepository = userRepository;
        this.config = config;
        this.organisationApplicationRepository = organisationApplicationRepository;
        this.airTableOrganisationService = airTableOrganisationService;
        this.organisationRepository = organisationRepository;
        this.logger = new common_1.Logger(AirTableUserService_1.name);
        this.apiKey = this.config.get('airTable.apiKey');
        this.usersUrl = this.config.get('airTable.url.users');
        this.organisationsUrl = this.config.get('airTable.url.organisations');
        this.axiosInstance = (0, axios_rate_limit_1.default)(axios_1.default.create(), {
            maxRequests: 5,
            perMilliseconds: 1000,
        });
    }
    async importUsersToAirtable() {
        const users = await this.userRepository.findUsersToAirtable();
        const usersChunks = (0, helpers_1.chunkArray)(users, 10);
        const allAirTableUsers = [];
        for (const chunk of usersChunks) {
            const mappedChunk = this.mapUserToAirTable(chunk);
            const airTableUsers = await this.postUsersToAirTable(mappedChunk);
            allAirTableUsers.push(...airTableUsers);
        }
        await this.findAndUpdateAirTableOrganisation(allAirTableUsers);
        return allAirTableUsers;
    }
    mapUserToAirTable(users, moderatorNickname) {
        const mappedUsers = users.map((item) => {
            if (item['Account status'] === registration_status_constant_1.REGISTRATION_STATUS.INVITED) {
                item['Invited by'] = moderatorNickname;
                item['Date of invitation'] = (0, helpers_2.getCurrentDateInCustomFormat)();
            }
            return { fields: JSON.parse(JSON.stringify(item)) };
        });
        return mappedUsers;
    }
    async postUsersToAirTable(users) {
        var _a;
        try {
            const airTableUserData = await this.axiosInstance.post(this.usersUrl, { records: users }, {
                headers: {
                    Authorization: `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json',
                },
            });
            return (_a = airTableUserData.data['records']) === null || _a === void 0 ? void 0 : _a.filter((field) => !!field).map((record) => ({
                airTableUserCellId: record['id'],
                dBUserId: record.fields['ID'],
            }));
        }
        catch (error) {
            this.logger.error(error.message);
        }
    }
    async findAndUpdateAirTableOrganisation(airTableUsers) {
        var _a;
        try {
            for (const airTableUser of airTableUsers) {
                const { dBUserId } = airTableUser;
                let { airTableUserCellId } = airTableUser;
                if (!airTableUserCellId) {
                    airTableUserCellId = (_a = (await this.getAirTableUserData(dBUserId))) === null || _a === void 0 ? void 0 : _a.airTableId;
                }
                if (!dBUserId)
                    return;
                const user = await this.userRepository.findOne({
                    where: { id: dBUserId },
                });
                if (user === null || user === void 0 ? void 0 : user.organisation_id) {
                    const airTableOrganisationCellId = await this.airTableOrganisationService.getAirTableOrgnisationCellId(user.organisation_id);
                    if (airTableOrganisationCellId && airTableUserCellId) {
                        await this.updateAirTableUsersOrganisationOrApplication(airTableUserCellId, airTableOrganisationCellId, true);
                    }
                }
                if (user) {
                    await this.updateAirTableApplication(dBUserId, airTableUserCellId);
                }
            }
        }
        catch (error) {
            this.logger.error(error.message);
        }
    }
    async updateAirTableApplication(userId, airTableUserCellId) {
        try {
            if (!userId)
                return;
            const application = await this.organisationApplicationRepository.findOne({
                where: { userId },
            });
            if (application) {
                const airTableOrganisationCellId = await this.airTableOrganisationService.getAirTableOrgnisationCellId(application === null || application === void 0 ? void 0 : application.organisationId);
                if (airTableOrganisationCellId) {
                    await this.updateAirTableUsersOrganisationOrApplication(airTableUserCellId, airTableOrganisationCellId, false);
                }
            }
        }
        catch (error) {
            this.logger.error(error.message);
        }
    }
    async getAirTableUserData(userId) {
        var _a;
        try {
            const airTableUser = await this.axiosInstance.get(`${this.usersUrl}?filterByFormula=FIND('${userId}', {ID})`, {
                headers: {
                    Authorization: `Bearer ${this.apiKey}`,
                },
            });
            const user = (_a = airTableUser === null || airTableUser === void 0 ? void 0 : airTableUser.data['records']) === null || _a === void 0 ? void 0 : _a.map((record) => {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                return ({
                    id: (_a = record.fields['ID']) !== null && _a !== void 0 ? _a : null,
                    email: (_b = record.fields['Email']) !== null && _b !== void 0 ? _b : null,
                    nickname: (_c = record.fields['Nickname']) !== null && _c !== void 0 ? _c : null,
                    organisation: (_e = (_d = record.fields['Organisation']) === null || _d === void 0 ? void 0 : _d[0]) !== null && _e !== void 0 ? _e : [],
                    applications: (_g = (_f = record.fields['Applies to']) === null || _f === void 0 ? void 0 : _f[0]) !== null && _g !== void 0 ? _g : [],
                    airTableId: record.id,
                    lastActivity: (_h = record.fields['Last activity']) !== null && _h !== void 0 ? _h : null,
                });
            });
            return user[0];
        }
        catch (error) {
            this.logger.error(error.message);
        }
    }
    async updateAirTableUser(userData) {
        var _a;
        const airTableUserId = (_a = (await this.getAirTableUserData(userData === null || userData === void 0 ? void 0 : userData.ID))) === null || _a === void 0 ? void 0 : _a.airTableId;
        if (airTableUserId) {
            try {
                await this.axiosInstance.patch(`${this.usersUrl}/${airTableUserId}`, {
                    fields: userData,
                }, {
                    headers: {
                        Authorization: `Bearer ${this.apiKey}`,
                    },
                });
            }
            catch (error) {
                this.logger.error(error.message);
            }
        }
    }
    async updateAirTableUsersOrganisationOrApplication(airTableUserId, airTableOrganisationId, updateOrganisation) {
        try {
            if (airTableOrganisationId) {
                let fieldsToUpdate = {};
                updateOrganisation
                    ? (fieldsToUpdate = {
                        Organisation: [airTableOrganisationId],
                    })
                    : (fieldsToUpdate = {
                        'Applies to': [airTableOrganisationId],
                    });
                this.axiosInstance.patch(`${this.usersUrl}/${airTableUserId}`, {
                    fields: fieldsToUpdate,
                }, {
                    headers: {
                        Authorization: `Bearer ${this.apiKey}`,
                    },
                });
            }
        }
        catch (error) {
            this.logger.error(error.message);
        }
    }
    async findByEmailAndUpdateId(userEmail, newId) {
        var _a, _b;
        try {
            const airTableUserData = await this.axiosInstance.get(`${this.usersUrl}?filterByFormula=FIND('${userEmail}', {Email})`, {
                headers: {
                    Authorization: `Bearer ${this.apiKey}`,
                },
            });
            const airTableUserId = (_b = (_a = airTableUserData.data['records']) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.id;
            if (airTableUserId) {
                await this.axiosInstance.patch(`${this.usersUrl}/${airTableUserId}`, {
                    fields: { ID: newId },
                }, {
                    headers: {
                        Authorization: `Bearer ${this.apiKey}`,
                    },
                });
            }
        }
        catch (error) {
            this.logger.error(error.message);
        }
    }
    async updateNumberOfUsers(organisationId, numberOfUsers) {
        try {
            const airTableId = await this.airTableOrganisationService.getAirTableOrgnisationCellId(organisationId);
            await this.axiosInstance.patch(`${this.organisationsUrl}/${airTableId}`, { fields: { 'Number of users': numberOfUsers } }, {
                headers: {
                    Authorization: `Bearer ${this.apiKey}`,
                },
            });
        }
        catch (error) {
            this.logger.error(error.message);
        }
    }
    async syncNumberOfUsersToAirtable(organisationId) {
        var _a, _b;
        try {
            const numberOfUsers = (_b = (_a = (await this.organisationRepository.findOrganisationsToAirtable(organisationId))) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b['Number of users'];
            await this.updateNumberOfUsers(organisationId, numberOfUsers);
        }
        catch (error) {
            this.logger.error(error.message);
        }
    }
    async updateLastActivity(time, userId) {
        var _a;
        const airTableUserData = await this.getAirTableUserData(userId);
        const airTableLastActivity = (_a = airTableUserData === null || airTableUserData === void 0 ? void 0 : airTableUserData.lastActivity) === null || _a === void 0 ? void 0 : _a.replace(/(\d{4})-(\d{2})-(\d{2})/, '$2/$3/$1');
        const lastActivity = (0, helpers_2.getCurrentDateInCustomFormat)(time);
        if (lastActivity && lastActivity !== airTableLastActivity) {
            try {
                await this.axiosInstance.patch(`${this.usersUrl}/${airTableUserData === null || airTableUserData === void 0 ? void 0 : airTableUserData.airTableId}`, {
                    fields: { 'Last activity': lastActivity },
                }, {
                    headers: {
                        Authorization: `Bearer ${this.apiKey}`,
                    },
                });
            }
            catch (error) {
                this.logger.error(error.message);
            }
        }
    }
};
exports.AirTableUserService = AirTableUserService;
exports.AirTableUserService = AirTableUserService = AirTableUserService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.CONFIG)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        config_1.ConfigService,
        organisation_application_repository_1.OrganisationApplicationRepository,
        airtable_organisation_service_1.AirTableOrganisationService,
        organisation_repository_1.OrganisationRepository])
], AirTableUserService);
//# sourceMappingURL=airtable-user.service.js.map