"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolutionCategoryMapping = exports.feedbackCategoryMapping = exports.statusMapping = exports.criticalityCategoryMapping = exports.sensitivityCategoryMapping = exports.responsibilityCategoryMapping = exports.sectorMapping = exports.populationTypeMapping = exports.reasonMapping = exports.urgencyMapping = exports.difficultyMapping = exports.genderMapping = exports.ageMapping = exports.csvHeaders = void 0;
exports.csvHeaders = [
    'Unique ID',
    'SCOPE Card Number',
    'Date of receipt',
    'Name of data collector',
    'Country',
    'Region',
    'District',
    'Settlement/ Site Name',
    'Feedback channel',
    'Language of the interaction',
    'Provided independently or with assistance',
    'Reason for concerned person not to share feedback independently',
    'Consent to record feedback',
    'Name of feedback provider',
    'Contact Number of the feedback provider',
    'Age range',
    'Sex',
    'Population Type',
    'Communities with Minority Affiliations',
    'Vulnerability factor',
    'Washington Group Q1 - Difficulty seeing',
    'Washington Group Q2 - Difficulty hearing',
    'Washington Group Q3 - Difficulty walking',
    'Washington Group Q4 - Difficulty remembering or concentrating',
    'Washington Group Q5 - Difficulty washing and/or dressing',
    'Washington Group Q6 - Difficulty communicating',
    'Complaint/Feedback Details',
    'Operational relevance/ Service Mapping Sector',
    'Responsibility Category (level-1)',
    'Sensitivity Category (level-2)',
    'Specific Sensitivity Category (level-2)',
    'Criticality Category (level-3)',
    'Status of feedback',
    'What action was taken?',
    'Date of referral',
    'Referred to (organization and department)',
    'Name of focal point',
    'Contact details of the focal point',
    'Date of case resolution',
    'Reason for action not possible (if applicable)',
    'Date of closing the loop (communicate back)',
    'Comments',
    'Key quote',
    'Rumour',
];
exports.ageMapping = {
    0: 'Preferred not to indicate',
    1: 'Below 18 years',
    2: '18 years and above but below 60 years',
    3: '18 years and above but below 60 years',
    4: '60 years and above',
    7: 'Below 18 years',
    default: 'Unknown',
};
exports.genderMapping = {
    0: 'Prefer not to answer',
    1: 'Female',
    2: 'Male',
    3: 'Non-Binary',
};
exports.difficultyMapping = {
    1: 'Seeing',
    2: 'Hearing',
    3: 'Walking or climbing steps',
    4: 'Reading or writing',
    5: 'Self-Care e.g. washing',
    6: 'Communicating',
    7: 'Other',
    8: 'Unspecified',
};
exports.urgencyMapping = {
    0: 'Doesn\'t need immediate assistance',
    1: 'Needs immediate assistance',
};
exports.reasonMapping = {
    1: 'They are unable due to physical or mental illness or disability',
    2: 'They are not willing to contact directly because they are afraid',
    3: 'They are under-age (a child)',
    4: 'The issue/question is urgent and there was no time to consult them',
    5: 'Prefer not to say',
    6: 'Other',
};
exports.populationTypeMapping = {
    'Legal status (refugees)': [75],
    'IDP Returnees': [93],
    'Other': [78],
};
exports.sectorMapping = {
    'Education': [34, 105, 37, 36, 35, 65, 66, 64],
    'CCCM': [29, 42, 61, 62, 63, 33, 31, 30],
    'Emergency Telecommunications': [39, 81],
    'Food Security': [22, 10, 50, 90, 55, 92, 91, 14, 23],
    'Health': [53, 96, 97, 98, 52, 21, 20, 19, 18, 17, 16, 54, 13],
    'Logistics': [32, 102],
    'Protection': [68, 69, 100, 101, 70, 71, 72, 73, 74, 75, 93, 76, 77, 78, 106],
    'Shelter': [61, 62, 11, 63, 33, 31, 30, 42],
    'Wash': [57, 56, 27, 58, 28, 59, 60, 99, 94],
    'Nutrition': [14],
    'Cash Assistance MPCA': [40, 104],
    'Livelihoods': [23, 104],
    'Local Integration': [49],
    'NFI': [11],
    'Housing Land And Property': [100],
    'Child Protection': [68],
    'GBV': [16],
    'SEA': [51],
    'Energy Environment': [84, 83, 82],
    'Feedback Mechanism': [89],
    'Complementary Pathways': [79],
    'Voluntary Repatriation': [93],
    'Registration': [75],
    'Resettlement': [75],
    'Refugee Status Determination': [75],
};
exports.responsibilityCategoryMapping = {
    internal: 'Internal',
    external: 'External',
};
exports.sensitivityCategoryMapping = {
    0: 'Non-sensitive',
    1: 'Sensitive',
};
exports.criticalityCategoryMapping = {
    urgent: 'Urgent (immediate action needs to be taken within 72 hrs)',
    regular: 'Regular (action needs to be taken)',
    noActionRequired: 'No action required (general monitoring and review)',
    unknown: 'Unknown/not specified',
};
exports.statusMapping = {
    1: 'Closed / Resolved',
    2: 'Open / Pending',
};
exports.feedbackCategoryMapping = {
    1: 'Feedback/Suggestion',
    2: 'Request for Information/Questions',
    3: 'Feedback/Suggestion',
    4: 'Complaints/Concerns',
    5: 'Request for Assistance (Aid and/or Services)',
};
exports.resolutionCategoryMapping = {
    1: 'Reason: Lack of funds',
    2: 'Reason: No agency or service available',
    3: 'Reason: No reply from referral agency',
    4: 'Status: Not eligible',
    5: 'Status: Not verified',
    6: 'Status: Unreachable',
};
//# sourceMappingURL=export-united.type.js.map