"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaseService = void 0;
const common_1 = require("@nestjs/common");
const case_status_constant_1 = require("../../airtable-client/constant/case-status.constant");
const case_repository_1 = require("../repository/case.repository");
const assistance_status_constant_1 = require("../../airtable-client/constant/assistance-status.constant");
const allegation_type_constant_1 = require("../../airtable-client/constant/allegation-type.constant");
const gender_constant_1 = require("../../airtable-client/constant/gender.constant");
const organisation_type_constant_1 = require("../../airtable-client/constant/organisation-type.constant");
const assistance_rendered_constant_1 = require("../../airtable-client/constant/assistance-rendered.constant");
const investigation_outcome_constant_1 = require("../../airtable-client/constant/investigation-outcome.constant");
const age_constant_1 = require("../../airtable-client/constant/age.constant");
const country_service_1 = require("../../country/service/country.service");
const helpers_1 = require("../../common/helpers");
const time_unit_constant_1 = require("../../common/constant/time-unit.constant");
const typeorm_1 = require("typeorm");
const di_constant_1 = require("../../common/constant/di.constant");
const config_1 = require("@nestjs/config");
const responsiveness_status_constant_1 = require("../../airtable-client/constant/responsiveness-status.constant");
const case_investigation_repository_1 = require("../repository/case-investigation.repository");
const urgent_constant_1 = require("../../airtable-client/constant/urgent.constant");
const jwt = __importStar(require("jsonwebtoken"));
let CaseService = class CaseService {
    constructor(caseInvestigationRepository, caseRepository, countryService, config) {
        this.caseInvestigationRepository = caseInvestigationRepository;
        this.caseRepository = caseRepository;
        this.countryService = countryService;
        this.config = config;
        this.caseStatusConditions = [
            {
                condition: 'process_and_refer_status IN (:values)',
                values: [
                    'Pending decision of allegation referral',
                    'Pending decision of allegation referral for more than 48 hours',
                    'Pending decision of allegation referral for more than 1 week',
                ],
            },
            {
                condition: 'referral_response IN (:values)',
                values: [
                    'Pending organisation response',
                    'Pending organisation response for more than 48 hours',
                    'Pending organisation response for more than 1 week',
                ],
            },
            {
                condition: 'investigation_status IN (:values)',
                values: [
                    'Pending decision to investigate',
                    'Pending decision to investigate ongoing for more than 6 weeks',
                    'Pending decision to investigate ongoing for more than 3 months',
                ],
            },
            {
                condition: 'investigation_result IN (:values)',
                values: [
                    'Investigation open',
                    'Investigation open for more than 3 months',
                    'Investigation open for more than 2 years',
                ],
            },
            {
                condition: 'informing_author IN (:values)',
                values: [
                    'Pending author notification',
                    'Pending author notification for more than 48 hours',
                ],
            },
        ];
    }
    getSignedMetabaseURL() {
        var METABASE_SITE_URL = "https://meta.talktoloop.org";
        var METABASE_SECRET_KEY = this.config.get('metabase_secret_key');
        var payload = {
            resource: { dashboard: 3 },
            params: {},
            exp: Math.round(Date.now() / 1000) + (60 * 60)
        };
        var token = jwt.sign(payload, METABASE_SECRET_KEY);
        var iframeUrl = METABASE_SITE_URL + "/embed/dashboard/" + token +
            "#bordered=true&titled=true";
        return iframeUrl;
    }
    async getCountOfCases(filters) {
        const [count] = await this.caseRepository.getCountOfCases(filters);
        return count;
    }
    async getUniqueGender() {
        const availableGender = await this.caseRepository
            .getUniqueGender()
            .then((data) => data.map((item) => item.gender));
        return Object.values(gender_constant_1.GENDER_TEXT)
            .filter((value) => availableGender.includes(value))
            .map((value) => (0, helpers_1.getKeyByValue)(gender_constant_1.GENDER_TEXT, value, false));
    }
    async getUniqueCountries() {
        const countries = await this.countryService.getCountries().then((data) => data.reduce((obj, value) => {
            obj[value.name.toLowerCase()] = value.code;
            return obj;
        }, {}));
        return this.caseRepository
            .getUniqueCountries()
            .then((data) => data
            .map((item) => countries[item.country.toLowerCase()])
            .filter((item) => item));
    }
    async averageTakenTime(filters) {
        const response = [];
        let element = {};
        for (const type in allegation_type_constant_1.ALLEGATION_TYPE_TEXT) {
            const avgTimes = await this.caseRepository.getAvgTakenTimeByAllegationType(filters);
            const { average, count } = (0, helpers_1.getAverageValue)(avgTimes === null || avgTimes === void 0 ? void 0 : avgTimes.filter(({ allegationType }) => allegationType === allegation_type_constant_1.ALLEGATION_TYPE_TEXT[type]));
            element = Object.assign(Object.assign({}, element), { type, average: parseFloat(average.toFixed(2)), count });
            response.push(element);
        }
        return response;
    }
    async whatAreTheTypeOfCasesInTheAccountability(filters) {
        var _a, _b;
        const data = await Promise.all(this.caseStatusConditions.map((item) => this.caseRepository.countOfCasesByAccountabilityAndAllegationType(filters, item.condition, {
            values: item.values,
        })));
        const response = [];
        for (const type in allegation_type_constant_1.ALLEGATION_TYPE_TEXT) {
            const allegationText = allegation_type_constant_1.ALLEGATION_TYPE_TEXT[type];
            let element = {};
            const values = [];
            for (const item of data) {
                values.push((_b = (_a = item
                    .filter(({ allegationType }) => {
                    return allegationText === allegation_type_constant_1.ALLEGATION_TYPE_TEXT.otherMisconduct
                        ? ['', null, allegation_type_constant_1.ALLEGATION_TYPE_TEXT.otherMisconduct].includes(allegationType)
                        : allegationType === allegationText;
                })) === null || _a === void 0 ? void 0 : _a.map((item) => item.count).reduce((prev, curr) => prev + curr, 0)) !== null && _b !== void 0 ? _b : 0);
            }
            element = Object.assign(Object.assign({}, element), { type, values });
            response.push(element);
        }
        return response;
    }
    async whatAreTheOutcomes(filters) {
        var _a, _b;
        const response = {};
        const outcomeData = await this.caseRepository.countCaseOutcome(filters);
        for (const key in investigation_outcome_constant_1.INVESTIGATION_OUTCOME) {
            const outComeText = investigation_outcome_constant_1.INVESTIGATION_OUTCOME[key];
            if (outComeText === investigation_outcome_constant_1.INVESTIGATION_OUTCOME.other) {
                response['referralToClearCheckMade'] =
                    await this.caseRepository.countReferralToClearCheckMade(filters);
            }
            if (outComeText !==
                investigation_outcome_constant_1.INVESTIGATION_OUTCOME.referralToMisconductDisclosureScheme) {
                const values = (_b = (_a = outcomeData.find(({ investigationOutcome }) => investigationOutcome === outComeText)) === null || _a === void 0 ? void 0 : _a.count) !== null && _b !== void 0 ? _b : 0;
                response[key] = values;
            }
        }
        response.completedInvestigations =
            await this.caseInvestigationRepository.countWhen('investigation_closed IS NOT NULL', filters);
        return response;
    }
    async getInfoDidPeopleReceivedAssistance(filters) {
        var _a, _b;
        const response = [];
        const filteredAssistance = Object.keys(assistance_rendered_constant_1.ASSISTANCE_RENDERED).filter((type) => type !==
            (0, helpers_1.getKeyByValue)(assistance_rendered_constant_1.ASSISTANCE_RENDERED, assistance_rendered_constant_1.ASSISTANCE_RENDERED.assistanceNA, false));
        for (const type in allegation_type_constant_1.ALLEGATION_TYPE_TEXT) {
            const allegationText = allegation_type_constant_1.ALLEGATION_TYPE_TEXT[type];
            const assistanceByAllegation = await this.caseRepository.countInfoAboutReceivedAssistancesByAllegationType(filters, allegationText);
            let element = {};
            const values = [];
            for (const assistanceEnum of filteredAssistance) {
                values.push((_b = (_a = assistanceByAllegation.find(({ hasTheSurvivorBeenRenderedAssistanceValue }) => hasTheSurvivorBeenRenderedAssistanceValue ===
                    assistance_rendered_constant_1.ASSISTANCE_RENDERED[assistanceEnum])) === null || _a === void 0 ? void 0 : _a.count) !== null && _b !== void 0 ? _b : 0);
            }
            element = Object.assign(Object.assign({}, element), { type, values });
            response.push(element);
        }
        return response;
    }
    async getSurvivorsPerAge(filters) {
        const response = [];
        for (const type in allegation_type_constant_1.ALLEGATION_TYPE_TEXT) {
            const allegationText = allegation_type_constant_1.ALLEGATION_TYPE_TEXT[type];
            const agesByAllegation = await this.caseRepository.countCaseAgesByAllegationType(filters, allegationText);
            const filteredAgeValues = Object.values(age_constant_1.AGE_TEXT).filter((value) => value != age_constant_1.AGE_TEXT.noAnswer);
            let element = {};
            const values = [];
            for (const ageEnum of Object.values(age_constant_1.AGE_TEXT)) {
                values.push(agesByAllegation
                    .filter(({ age }) => ageEnum !== age_constant_1.AGE_TEXT.noAnswer
                    ? age === ageEnum
                    : !filteredAgeValues.includes(age))
                    .reduce((prev, next) => prev + next.count, 0));
            }
            element = Object.assign(Object.assign({}, element), { type, values, isAnonymousData: false });
            response.push(element);
        }
        return response;
    }
    checkIfChartShouldBeAnonymized(response) {
        const anonymize = (0, helpers_1.chartShouldBeAnonymous)(response);
        const anonymousValues = this.config.get('statistics.valuesForAnonymousChart');
        if (!Array.isArray(anonymousValues)) {
            return response;
        }
        if (anonymize) {
            for (const index in response) {
                response[index].values = Array(response[index].values.length).fill(anonymousValues[index]);
                response[index].isAnonymousData = true;
            }
        }
        return response;
    }
    async getInformationHowManyCasesReceived(filters) {
        const total = await this.caseRepository.countWhen(undefined, filters);
        const closed = await this.caseRepository.countWhen({
            caseStatus: case_status_constant_1.CASE_STATUS.closed,
        }, filters);
        const open = await this.caseRepository.countWhen({
            caseStatus: case_status_constant_1.CASE_STATUS.open,
        }, filters);
        const urgent = await this.caseRepository.countWhen({
            initialUrgency: (0, helpers_1.getKeyByValue)(urgent_constant_1.URGENT, 1, false),
        }, filters);
        const assistanceProvided = await this.caseRepository.countWhen({
            assistanceStatus: (0, typeorm_1.In)(Object.values(assistance_status_constant_1.ASSISTANCE_STATUS)),
        }, filters);
        return {
            total,
            open,
            closed,
            urgent,
            assistanceProvided,
        };
    }
    async getCasesGroupedByAllegationAndAuthorPerspective(filters) {
        return this.caseRepository.getCasesGroupedByAllegationAndAuthorPerspective(filters);
    }
    async getCasesGroupedByCaseAccountabilityAndOrganisationType(filters) {
        const operations = this.caseStatusConditions.map((item) => this.caseRepository.getCountOfOrganizationsByColumnsAndValues(filters, item.condition, {
            values: item.values,
        }));
        operations.push(this.caseRepository.getCountOfOrganizationsByColumnsAndValues(filters, 'informing_author IN (:values)', {
            values: ['Author informed n/a, or reachable', 'Author informed'],
        }));
        return Promise.all(operations);
    }
    async getSurvivorsPerGender(filters) {
        const response = [];
        for (const type in allegation_type_constant_1.ALLEGATION_TYPE_TEXT) {
            const allegationText = allegation_type_constant_1.ALLEGATION_TYPE_TEXT[type];
            const gendersByAllegation = await this.caseRepository.countCaseGenderByAllegationType(filters, allegationText);
            const filteredGenderValues = Object.values(gender_constant_1.GENDER_TEXT).filter((value) => value != gender_constant_1.GENDER_TEXT.noAnswer);
            let element = {};
            const values = [];
            for (const genderEnum of Object.values(gender_constant_1.GENDER_TEXT)) {
                values.push(gendersByAllegation
                    .filter(({ gender }) => genderEnum !== gender_constant_1.GENDER_TEXT.noAnswer
                    ? gender === genderEnum
                    : !filteredGenderValues.includes(gender))
                    .reduce((prev, next) => prev + next.count, 0));
            }
            element = Object.assign(Object.assign({}, element), { type, values, isAnonymousData: false });
            response.push(element);
        }
        return response;
    }
    async getDataForTypeOfOrganisationByAllogation(filters) {
        var _a, _b, _c, _d;
        const response = [];
        const organizationsTypes = Object.values(organisation_type_constant_1.ORGANISATION_TYPE_TEXT);
        const specificOrganizationsTypes = organizationsTypes.filter((value) => value !== organisation_type_constant_1.ORGANISATION_TYPE_TEXT.other);
        for (const type in allegation_type_constant_1.ALLEGATION_TYPE_TEXT) {
            const allegationText = allegation_type_constant_1.ALLEGATION_TYPE_TEXT[type];
            const typesByAllegation = await this.caseRepository.countOrganizationTypeByAllegationType(filters, allegationText);
            let element = {};
            const values = [];
            let value;
            for (const organisationTypeEnum in organisation_type_constant_1.ORGANISATION_TYPE_TEXT) {
                value =
                    (_b = (_a = typesByAllegation
                        .filter(({ organisationType }) => {
                        return organisationTypeEnum === organisation_type_constant_1.ORGANISATION_TYPE_TEXT.other
                            ? !specificOrganizationsTypes.includes(organisationType)
                            : organisation_type_constant_1.ORGANISATION_TYPE_TEXT[organisationTypeEnum] ===
                                organisationType;
                    })) === null || _a === void 0 ? void 0 : _a.map((item) => item.count).reduce((prev, curr) => prev + curr, 0)) !== null && _b !== void 0 ? _b : 0;
                if (organisationTypeEnum == organisation_type_constant_1.ORGANISATION_TYPE_TEXT.other) {
                    value -=
                        (_d = (_c = typesByAllegation
                            .filter(({ organisationType }) => !organizationsTypes.includes(organisationType))) === null || _c === void 0 ? void 0 : _c.map((item) => item.count).reduce((prev, curr) => prev + curr, 0)) !== null && _d !== void 0 ? _d : 0;
                }
                values.push(value);
            }
            element = Object.assign(Object.assign({}, element), { type, values });
            response.push(element);
        }
        return response;
    }
    async getCasesWithAllegationTypeByPeriod(filters) {
        return this.caseRepository.getCasesWithAllegationTypeByPeriod(filters);
    }
    async getUrgentCasesByPeriod(filters) {
        return this.caseRepository.getUrgentCasesByPeriod(filters);
    }
    async getAverageTakenTimeToCompleteStep(filters) {
        var _a, _b;
        const closeCase = await this.caseRepository.getAvgTakenTime(filters);
        const result = {};
        let average = 0;
        let count = 0;
        for (const [key, value] of Object.entries({
            processAndRefer: (0, helpers_1.getAverageValue)((0, helpers_1.flatArray)(await Promise.all([
                this.caseRepository.getAverageTakenTimeToProcessAndReferByAsistanceReferralMadeDate(filters),
                this.caseRepository.getAverageTakenTimeToProcessAndReferByCaseProcessedDate(filters),
            ]))),
            respondToReferral: (0, helpers_1.getAverageValue)(await this.caseRepository.getAverageTakenTimeToRespondToReferral(filters)),
            assessWhetherToInvestigate: (0, helpers_1.getAverageValue)((0, helpers_1.flatArray)(await Promise.all([
                this.caseRepository.getAverageTakenTimeToAssessWhetherToInvestigateByInvestigationOpenedDate(filters),
                this.caseRepository.getAverageTakenTimeToAssessWhetherToInvestigateByAssessmentMadeDate(filters),
            ]))),
            completeInvestigation: (0, helpers_1.getAverageValue)(await this.caseRepository.getAverageTakenTimeToCompleteInvestigation(filters)),
            informTheAuthorOfOutcome: (0, helpers_1.getAverageValue)((0, helpers_1.flatArray)(await Promise.all([
                this.caseRepository.getAverageTakenTimeToInformTheAuthorOfOutcomeByAssessmentMade(filters),
                this.caseRepository.getAverageTakenTimeToInformTheAuthorOfOutcomeByCaseProcessed(filters),
                this.caseRepository.getAverageTakenTimeToInformTheAuthorOfOutcomeByInvestigationClosed(filters),
            ]))),
            closeCase: (0, helpers_1.getAverageValue)(closeCase.map((item) => ({
                average: item.averageHours,
                count: item.count,
            }))),
        })) {
            average = (_a = value === null || value === void 0 ? void 0 : value.average) !== null && _a !== void 0 ? _a : 0;
            count = (_b = value === null || value === void 0 ? void 0 : value.count) !== null && _b !== void 0 ? _b : 0;
            result[key] = {
                days: (0, helpers_1.calculateCustomNumberOfDays)(average, time_unit_constant_1.TIME_UNIT.DAY).averageTime,
                tooltip: Object.assign(Object.assign({}, (0, helpers_1.calculateCustomNumberOfDays)(average)), { numberOfCases: count }),
            };
        }
        return result;
    }
    async getDataAboutResponsiveByStep(filters) {
        return {
            steps: [
                {
                    type: 'actionTakenOnTime',
                    values: [
                        await this.caseRepository.getCountOfOpenCasesByColumnsAndValues(filters, [
                            {
                                name: 'process_and_refer_status',
                                values: [
                                    responsiveness_status_constant_1.RESPONSIVENESS_STATUS.pendingDecisionOfAllegationReferral,
                                ],
                            },
                        ]),
                        await this.caseRepository.getCountOfOpenCasesByColumnsAndValues(filters, [
                            {
                                name: 'referral_response',
                                values: [responsiveness_status_constant_1.RESPONSIVENESS_STATUS.pendingOrganisationResponse],
                            },
                        ]),
                        await this.caseRepository.getCountOfOpenCasesByColumnsAndValues(filters, [
                            {
                                name: 'investigation_status',
                                values: [responsiveness_status_constant_1.RESPONSIVENESS_STATUS.pendingDecisionToInvestigate],
                            },
                        ]),
                        await this.caseRepository.getCountOfOpenCasesByColumnsAndValues(filters, [
                            {
                                name: 'investigation_result',
                                values: [responsiveness_status_constant_1.RESPONSIVENESS_STATUS.investigationOpen],
                            },
                        ]),
                        await this.caseRepository.getCountOfOpenCasesByColumnsAndValues(filters, [
                            {
                                name: 'informing_author',
                                values: [responsiveness_status_constant_1.RESPONSIVENESS_STATUS.pendingAuthorNotification],
                            },
                        ]),
                    ],
                },
                {
                    type: 'overdue',
                    values: [
                        await this.caseRepository.getCountOfOpenCasesByColumnsAndValues(filters, [
                            {
                                name: 'process_and_refer_status',
                                values: [
                                    responsiveness_status_constant_1.RESPONSIVENESS_STATUS.pendingDecisionOfAllegationReferralForMoreThan48Hours,
                                ],
                            },
                        ]),
                        await this.caseRepository.getCountOfOpenCasesByColumnsAndValues(filters, [
                            {
                                name: 'referral_response',
                                values: [
                                    responsiveness_status_constant_1.RESPONSIVENESS_STATUS.pendingOrganisationResponseForMoreThan48Hours,
                                ],
                            },
                        ]),
                        await this.caseRepository.getCountOfOpenCasesByColumnsAndValues(filters, [
                            {
                                name: 'investigation_status',
                                values: [
                                    responsiveness_status_constant_1.RESPONSIVENESS_STATUS.pendingDecisionToInvestigateOngoingForMoreThan6Weeks,
                                ],
                            },
                        ]),
                        await this.caseRepository.getCountOfOpenCasesByColumnsAndValues(filters, [
                            {
                                name: 'investigation_result',
                                values: [
                                    responsiveness_status_constant_1.RESPONSIVENESS_STATUS.investigationOpenFoMoreThan3Months,
                                ],
                            },
                        ]),
                        await this.caseRepository.getCountOfOpenCasesByColumnsAndValues(filters, [
                            {
                                name: 'informing_author',
                                values: [
                                    responsiveness_status_constant_1.RESPONSIVENESS_STATUS.pendingAuthorNotificationForMoreThan48Hours,
                                ],
                            },
                        ]),
                    ],
                },
                {
                    type: 'unresponsive',
                    values: [
                        await this.caseRepository.getCountOfOpenCasesByColumnsAndValues(filters, [
                            {
                                name: 'process_and_refer_status',
                                values: [
                                    responsiveness_status_constant_1.RESPONSIVENESS_STATUS.pendingDecisionOfAllegationReferralForMoreThan1Week,
                                ],
                            },
                        ]),
                        await this.caseRepository.getCountOfOpenCasesByColumnsAndValues(filters, [
                            {
                                name: 'referral_response',
                                values: [
                                    responsiveness_status_constant_1.RESPONSIVENESS_STATUS.pendingOrganisationResponseForMoreThan1Week,
                                ],
                            },
                        ]),
                        await this.caseRepository.getCountOfOpenCasesByColumnsAndValues(filters, [
                            {
                                name: 'investigation_status',
                                values: [
                                    responsiveness_status_constant_1.RESPONSIVENESS_STATUS.pendingDecisionToInvestigateOngoingForMoreThan3Months,
                                ],
                            },
                        ]),
                        await this.caseRepository.getCountOfOpenCasesByColumnsAndValues(filters, [
                            {
                                name: 'investigation_result',
                                values: [
                                    responsiveness_status_constant_1.RESPONSIVENESS_STATUS.investigationOpenForMoreThan2Years,
                                ],
                            },
                        ]),
                        0,
                    ],
                },
            ],
            closedCases: await this.caseRepository.getCountOfClosedCases(filters),
        };
    }
};
exports.CaseService = CaseService;
exports.CaseService = CaseService = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, common_1.Inject)(di_constant_1.DI_CONSTANTS.CONFIG)),
    __metadata("design:paramtypes", [case_investigation_repository_1.CaseInvestigationRepository,
        case_repository_1.CaseRepository,
        country_service_1.CountryService,
        config_1.ConfigService])
], CaseService);
//# sourceMappingURL=case.service.js.map