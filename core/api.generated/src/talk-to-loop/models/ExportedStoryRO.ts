/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ExportedStoryRO = {
    feedbackId: string;
    categories: Array<'thanks' | 'question' | 'opinion' | 'concern' | 'request'>;
    publishedAt: string;
    countryCode: string;
    location: string;
    age: '14-17' | '18-29' | '30-59' | '60+' | 'no_answer';
    gender: 'female' | 'male' | 'non_binary' | 'no_answer';
    difficulties: Array<'seeing' | 'hearing' | 'walkingOrClimbingSteps' | 'remembering' | 'selfCareForExampleWashing' | 'communicating' | 'other' | 'none'>;
    thematicParents: 'health' | 'foodSecurity' | 'wash' | 'shelter' | 'education' | 'protection' | 'governance' | 'cross-cutting';
    thematicChildren: 'health.medicalCentres' | 'health.medications/MedicinesFacilitiesAndServices' | 'health.epidemics/Pandemics' | 'health.covid' | 'health.ebola' | 'health.hiv/Aids' | 'health.gender-basedViolence' | 'health.sexualAndReproductiveRights' | 'health.mentalHealth' | 'health.other' | 'foodSecurity.nutrition' | 'foodSecurity.feeding/Malnutrition' | 'foodSecurity.livelihoods' | 'foodSecurity.foodItems' | 'foodSecurity.livestock' | 'foodSecurity.agriculture' | 'foodSecurity.locust' | 'foodSecurity.other' | 'wash.handwashingStations' | 'wash.waterPoints' | 'wash.latrines' | 'wash.waterTrucking' | 'wash.solidWaste/GarbageManagement' | 'wash.waterFacilitiesAndSupplies' | 'wash.flooding/HeavyRains' | 'wash.other' | 'shelter.non-foodItems' | 'shelter.temporaryShelters' | 'shelter.campCoordinationManagement' | 'shelter.housing' | 'shelter.lightingAndElectricity' | 'shelter.construction' | 'shelter.technicalSupport' | 'shelter.other' | 'education.earlyChildhood' | 'education.primary' | 'education.secondary' | 'education.university/Colleges/Trades' | 'education.scholarships' | 'education.other' | 'protection.children' | 'protection.youngPeople' | 'protection.women' | 'protection.personWithDisabilities' | 'protection.elderlies' | 'protection.lgtbq+' | 'protection.chronicallyIllPeople' | 'protection.legalStatus(refugees)' | 'protection.indigenousCommunity' | 'protection.lowIncomeFamilies' | 'protection.idp' | 'protection.minorityGroup' | 'protection.other' | 'governance.elections' | 'governance.finance' | 'governance.civicSpace' | 'governance.safetyAndSecurity' | 'governance.other' | 'cross-cutting.logistic' | 'cross-cutting.cash' | 'cross-cutting.telecommunications' | 'cross-cutting.capacityBuilding' | 'cross-cutting.communitySensitisation' | 'cross-cutting.aidWorkers' | 'cross-cutting.climateChange' | 'cross-cutting.environment' | 'cross-cutting.drrAndPreparedness' | 'cross-cutting.loopOnboarding' | 'cross-cutting.other';
    organisations: Array<string>;
    content: string;
    originalContent: string;
    url: string;
    communicationChannel: 'web' | 'sms' | 'messenger' | 'whatsapp' | 'ivrr' | 'telegram';
    didAnyoneComment: boolean;
    originalContentLanguage: 'english' | 'french' | 'spanish' | 'arabic' | 'nyanja' | 'cebuano' | 'somali' | 'tagalog' | 'bemba' | 'maay' | 'indonesian' | 'tonga' | 'ukrainian' | 'polish' | 'lozi';
};

