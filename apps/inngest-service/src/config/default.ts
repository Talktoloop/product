import { GET_READINGS_FAILED, Recordings } from "@ourloop/shared";

export interface TwilioNumberConfig {
    twilioPhoneNumber: string;
    utcTimeDiff: number;
    inboundFlowId: string;
    trunkSid?: string;
    country?: string;
}


const env = process.env;
let twilioPhoneNumbers = [] as TwilioNumberConfig[];

export function checkIfNightNow(utcOffset: number): boolean {
    const nowUtc = new Date();
    const localHour = (nowUtc.getUTCHours() + utcOffset + 24) % 24;
    return localHour >= 22 || localHour <= 6;
}

export function getMorningTimeInLocalTimezone(utcOffset: number): string {
    const now = new Date();
    const utcHours = now.getUTCHours();
    const localHour = (utcHours + utcOffset + 24) % 24;

    let hoursToAdd = 0;
    if (localHour >= 7) {
        hoursToAdd = 24 - localHour + 7; // next day morning
    } else if (localHour < 7) {
        hoursToAdd = 7 - localHour;
    }

    const deliveryDate = new Date(now.getTime() + hoursToAdd * 60 * 60 * 1000);
    return deliveryDate.toISOString();
}

export const getTwilioNumberConfig = (phoneNumber: string) => {
    return twilioPhoneNumbers.find(
        (number) => number.twilioPhoneNumber === phoneNumber,
    );
};
export const defaults = {
    languages: {
        en: 'English',
        ny: 'Nyanja',
        tog: 'Tonga',
        so: 'Somali-Maxatiri',
        maa: 'Somalia-Maay',
        bnd: 'Somali-Banadiri-Marka',
        bjn: 'Somali-Baajuuni',
        bara: 'Somali-Barawani-Chimini'
    },
    recordings: {
        reply: {
            intro: {
                en: {
                    text: 'Hello\nThis is an automated voice service.\nYou recently shared your experience of an organisation working in your area with Loop, and somebody has replied.\nIn a moment, you’ll hear the voice of a member of the Loop team reading the reply to you. Afterwards, you’ll hear some options about how to reply. First, here is the Loop moderator:',
                    audio:
                        'https://social-media-files.talktoloop.org/English/IVR-Format/R/R1.1.wav',
                },
                ny: {
                    text: 'Muli bwanji.\nIyi ni automated voice service.\nMunakambapo vamene munacitako experience na bungwe yamene igwila nchito mu area yanu na Loop. Winangu wayankha.\nMuzamvela mau ya memba wa team akubelengelani yankho. Pambuyo pake, mudzamvela vinangu vosankha va mwamene mungayankhile.\nChoyambilila, uyu Loop moderator:',
                    audio:
                        'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/R/R1.1.wav',
                },
                tog: {
                    text: 'Mwatambulwa,\neci ncibelesyo cisumpukide cibelesya jwi kwiinda mukubelesya maiiwe muluwo.\nCalino lino mwakabaana na kwaambila bamwi kujatikizya malimvwe na mbomulimvwa kujatikizya mbunga yalo ibeleka antoomwe a Loop mubusena nkomuzulilwa, alimwi kuli bamwi bapa bwiinguzi.\nKwaciindi biyo cisyoonto mulamvwa jwii lyabamwi bantu bazulilwa ku Loop balamubalila bwiinguzi.\nKwayinda ciindi cisyoonto, mulamvwa kusala kupedwe kweendelana akuti na muyanda kupa bwiinguzi, cakusanguna, mbaaba beendelezi ba Loop.',
                    audio:
                        'https://social-media-files.talktoloop.org/Tonga/IVR-Format/R/R1.1.wav',
                },
                so: {
                    text: 'Kani waa adeeg cod ah oo horay loo duubay.\nWaxaad dhawaan nala wadaagtay sheeko ku saabsan hay’ad ka shaqaysaa deegaankaaga. Ruux ka socda hay’adda ayaa ka soo jawaabay sheekadaada.\nWaxaad mardhow dhagaysan doontaa jawaabtooda ka dibna waxaad dooran doortaa inaad u jawaabto iyo in kale.',
                    audio:
                        'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/R/R1.1.mp3',
                },
                maa: {
                    text: 'Kang waliba adeeg cod eh oo mar hora la duubi.\nKang waliba adeeg cod eh oo mar hora la duubi.\nWaliba mar dhow dhegeysadaase jowaabtiyo kubacadana waliba doorada doonte ini ada ku jowaabta I ini kale.',
                    audio:
                        'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/R/R1.1.mp3',
                },
                bnd: {
                    text: 'Kang waliba adeeg cod eh oo mar hora la duubi.\nKang waliba adeeg cod eh oo mar hora la duubi.\nWaliba mar dhow dhegeysadaase jowaabtiyo kubacadana waliba doorada doonte ini ada ku jowaabta I ini kale.',
                    audio:
                        'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/R/R1.1.mp3',
                },
                bjn: {
                    text: 'Kang waliba adeeg cod eh oo mar hora la duubi.\nKang waliba adeeg cod eh oo mar hora la duubi.\nWaliba mar dhow dhegeysadaase jowaabtiyo kubacadana waliba doorada doonte ini ada ku jowaabta I ini kale.',
                    audio:
                        'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/R/R1.1.mp3',
                },
                bara: {
                    text: 'Kang waliba adeeg cod eh oo mar hora la duubi.\nKang waliba adeeg cod eh oo mar hora la duubi.\nWaliba mar dhow dhegeysadaase jowaabtiyo kubacadana waliba doorada doonte ini ada ku jowaabta I ini kale.',
                    audio:
                        'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/R/R1.1.mp3',
                },
            },
            outro: {
                en: {
                    text: 'To repeat the message that was just played, please press 1.\nIf you wish to respond to the message now, please press 2\nIf you wish to respond to the message later, please press 3\nIf you don’t wish to respond, please press 4',
                    audio:
                        'https://social-media-files.talktoloop.org/English/IVR-Format/R/R2.1.wav',
                },
                ny: {
                    text: 'Kuti mubwezepo message yamene yenze yalila, tinikani 1.\nNgati mufuna kuyankha ma message lomba pano, tinikani 2.\nNgati mufuna kuyankha pambuyo pake, tinikani 3.\nNgati simufuna kuyankha, tinikani 4.',
                    audio:
                        'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/R/R2.1.wav',
                },
                tog: {
                    text: 'Kuti na muyanda kwiindulula na kuloolola kumvwa makani alo azwa akubikkwa akaka amutyanke a 1.\nKuti na muyanda kupa bwiinguzi kumakani na bulembo lino, akaka amutyanke a 2.\nKuti na mulayanda kupa bwiinguzi aciindi cimwi ciimbi kutali lino, akaka amutyanke a 3.\nNa tamuyandi kupa bwiinguzi, akaka amutyanke a 4.',
                    audio:
                        'https://social-media-files.talktoloop.org/Tonga/IVR-Format/R/R2.1.wav',
                },
                so: {
                    text: 'Si aad mar kale u dhagaysto fariintii aad hadda dhagaysatay, fadlan riix 1.\nHaddii aad rabto inaad hadda ka jawaabto fariinta, fadlan riix 2.\nHaddii aad rabto inaad hadda ka jawaabto fariinta goor dambe, fadlan riix 3.\nHaddii aadan rabin inaad jawaab bixiso, fadlan riix 4.',
                    audio:
                        'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/R/R2.1.mp3',
                },
                maa: {
                    text: 'Sidi ana mar kale ing dhugunsata fariingtung ada hada dhugunsati fadlang rii 1.\nHooba ada fadaasa ini ad ahata ku jowaabta fariingtung fadlan rii 2.\nHooba ada fadaasa ini ad ahata ka jowaabta fariingta mar hora fadlan rii 3.\nHooba ada ing fadaana ini ada jowaabta fadlan rii 4.',
                    audio:
                        'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/R/R2.1.mp3',
                },
                bnd: {
                    text: 'Sidi ana mar kale ing dhugunsata fariingtung ada hada dhugunsati fadlang rii 1.\nHooba ada fadaasa ini ad ahata ku jowaabta fariingtung fadlan rii 2.\nHooba ada fadaasa ini ad ahata ka jowaabta fariingta mar hora fadlan rii 3.\nHooba ada ing fadaana ini ada jowaabta fadlan rii 4.',
                    audio:
                        'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/R/R2.1.mp3',
                },
                bjn: {
                    text: 'Sidi ana mar kale ing dhugunsata fariingtung ada hada dhugunsati fadlang rii 1.\nHooba ada fadaasa ini ad ahata ku jowaabta fariingtung fadlan rii 2.\nHooba ada fadaasa ini ad ahata ka jowaabta fariingta mar hora fadlan rii 3.\nHooba ada ing fadaana ini ada jowaabta fadlan rii 4.',
                    audio:
                        'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/R/R2.1.mp3',
                },
                bara: {
                    text: 'Sidi ana mar kale ing dhugunsata fariingtung ada hada dhugunsati fadlang rii 1.\nHooba ada fadaasa ini ad ahata ku jowaabta fariingtung fadlan rii 2.\nHooba ada fadaasa ini ad ahata ka jowaabta fariingta mar hora fadlan rii 3.\nHooba ada ing fadaana ini ada jowaabta fadlan rii 4.',
                    audio:
                        'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/R/R2.1.mp3',
                },

            },
            options: {
                '0': {
                    en: 'https://social-media-files.talktoloop.org/English/IVR-Format/R/R4.1.wav',
                    ny: 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/R/R4.1.wav',
                    tog: 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/R/R4.1.wav',
                    so: 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/R/R4.1.mp3',
                    maa: 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/R/R4.1.mp3',
                    bnd: 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/R/R4.1.mp3',
                    bjn: 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/R/R4.1.mp3',
                    bara: 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/R/R4.1.mp3',
                },
                '1': {
                    en: 'https://social-media-files.talktoloop.org/English/IVR-Format/R/R2.1.wav',
                    ny: 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/R/R2.1.wav',
                    tog: 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/R/R2.1.wav',
                    so: 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/R/R2.1.mp3',
                    maa: 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/R/R2.1.mp3',
                    bnd: 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/R/R2.1.mp3',
                    bjn: 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/R/R2.1.mp3',
                    bara: 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/R/R2.1.mp3'
                },
                '2': {
                    en: 'https://social-media-files.talktoloop.org/English/IVR-Format/R/R3.1.wav',
                    ny: 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/R/R3.1.wav',
                    tog: 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/R/R3.1.wav',
                    so: 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/R/R3.1.mp3',
                    maa: 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/R/R3.1.mp3',
                    bnd: 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/R/R3.1.mp3',
                    bjn: 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/R/R3.1.mp3',
                    bara: 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/R/R3.1.mp3'
                },
                '3': {
                    en: 'https://social-media-files.talktoloop.org/English/IVR-Format/R/R3.2.wav',
                    ny: 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/R/R3.2.wav',
                    tog: 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/R/R3.2.wav',
                    so: 'https://social-media-files.talktoloop.org/English/IVR-Format/R/R3.2.wav',
                    maa: 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/R/R3.2.mp3',
                    bnd: 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/R/R3.2.mp3',
                    bjn: 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/R/R3.2.mp3',
                    bara: 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/R/R3.2.mp3',
                },
                '4': {
                    en: 'https://social-media-files.talktoloop.org/English/IVR-Format/R/R3.3.wav',
                    ny: 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/R/R3.3.wav',
                    tog: 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/R/R3.3.wav',
                    so: 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/R/R3.3.mp3',
                    maa: 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/R/R3.3.mp3',
                    bnd: 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/R/R3.3.mp3',
                    bjn: 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/R/R3.3.mp3',
                    bara: 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/R/R3.3.mp3',
                },
            },
        },
        publication: {
            story: {
                en: 'https://social-media-files.talktoloop.org/English/IVR-Format/R/R5.1.mp3',
                ny: 'https://social-media-files.talktoloop.org/English/IVR-Format/R/R5.1.mp3',
                tog: 'https://social-media-files.talktoloop.org/English/IVR-Format/R/R5.1.mp3',
                so: 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/P/P1.1.mp3',
                maa: 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/P/P1.1.mp3',
                bnd: 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/P/P1.1.mp3',
                bjn: 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/P/P1.1.mp3',
                bara: 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/P/P1.1.mp3'
            },
            reply: {
                en: 'https://social-media-files.talktoloop.org/English/IVR-Format/R/R5.1.mp3',
                ny: 'https://social-media-files.talktoloop.org/English/IVR-Format/R/R5.1.mp3',
                tog: 'https://social-media-files.talktoloop.org/English/IVR-Format/R/R5.1.mp3',
                so: 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/P/P1.2.mp3',
                maa: 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/P/P1.2.mp3',
                bnd: 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/P/P1.2.mp3',
                bjn: 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/P/P1.2.mp3',
                bara: 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/P/P1.2.mp3'
            },
        },
        rejection: {
            story: {
                intro: {
                    en: 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X1.1.wav',
                    ny: 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X1.1.wav',
                    tog: 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X1.1.wav',
                    so: 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X1.1.mp3',
                    maa: 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X1.1.mp3',
                    bnd: 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X1.1mp3',
                    bjn: 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X1.1.mp3',
                    bara: 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X1.1.mp3'
                },
                reasons: {
                    en: {
                        '1': 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X2.1.wav',
                        '2': 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X2.2.wav',
                        '3': 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X2.3.wav',
                        '4': 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X2.4.wav',
                        '5': 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X2.5.wav',
                        '7': 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X2.6.wav',
                        '10': 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X2.10.mp3'
                    },
                    ny: {
                        '1': 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X2.1.wav',
                        '2': 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X2.2.wav',
                        '3': 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X2.3.wav',
                        '4': 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X2.4.wav',
                        '5': 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X2.5.wav',
                        '7': 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X2.6.wav',
                    },
                    tog: {
                        '1': 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X2.1.wav',
                        '2': 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X2.2.wav',
                        '3': 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X2.3.wav',
                        '4': 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X2.4.wav',
                        '5': 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X2.5.wav',
                        '7': 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X2.6.wav',
                    },
                    so: {
                        '1': 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X2.1.mp3',
                        '2': 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X2.2.mp3',
                        '3': 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X2.3.mp3',
                        '4': 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X2.4.mp3',
                        '5': 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X2.5.mp3',
                        '7': 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X2.6.mp3',
                        '10': 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X2.10.mp3',
                    },
                    maa: {
                        '1': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.1.mp3',
                        '2': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.2.mp3',
                        '3': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.3.mp3',
                        '4': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.4.mp3',
                        '5': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.5.mp3',
                        '7': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.6.mp3',
                        '10': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.10.mp3',
                    },
                    bnd: {
                        '1': 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X2.1.mp3',
                        '2': 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X2.2.mp3',
                        '3': 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X2.3.mp3',
                        '4': 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X2.4.mp3',
                        '5': 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X2.5.mp3',
                        '7': 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X2.6.mp3',
                        '10': 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X2.10.mp3',
                    },
                    bjn: {
                        '1': 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X2.1.mp3',
                        '2': 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X2.2.mp3',
                        '3': 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X2.3.mp3',
                        '4': 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X2.4.mp3',
                        '5': 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X2.5.mp3',
                        '7': 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X2.6.mp3',
                        '10': 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X2.10.mp3',
                    },
                    bara: {
                        '1': 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X2.1.mp3',
                        '2': 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X2.2.mp3',
                        '3': 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X2.3.mp3',
                        '4': 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X2.4.mp3',
                        '5': 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X2.5.mp3',
                        '7': 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X2.6.mp3',
                        '10': 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X2.10.mp3',
                    }
                },
                outro: {
                    en: 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X3.1.wav',
                    ny: 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X3.1.wav',
                    tog: 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X3.1.wav',
                    so: 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X3.1.mp3',
                    maa: 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X3.1.mp3',
                    bnd: 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X3.1mp3',
                    bjn: 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X3.1.mp3',
                    bara: 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X3.1.mp3'
                },
            },
            reply: {
                intro: {
                    en: 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X1.1.wav',
                    ny: 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X1.1.wav',
                    tog: 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X1.1.wav',
                    so: 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X1.1.mp3',
                    maa: 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X1.1.mp3',
                    bnd: 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X1.1.mp3',
                    bjn: 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X1.1.mp3',
                    bara: 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X1.1.mp3'
                },
                reasons: {
                    en: {
                        '1': 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X2.1.wav',
                        '2': 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X2.2.wav',
                        '3': 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X2.3.wav',
                        '4': 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X2.4.wav',
                        '5': 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X2.5.wav',
                        '7': 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X2.6.wav',
                    },
                    ny: {
                        '1': 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X2.1.wav',
                        '2': 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X2.2.wav',
                        '3': 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X2.3.wav',
                        '4': 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X2.4.wav',
                        '5': 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X2.5.wav',
                        '7': 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X2.6.wav',
                    },
                    tog: {
                        '1': 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X2.1.wav',
                        '2': 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X2.2.wav',
                        '3': 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X2.3.wav',
                        '4': 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X2.4.wav',
                        '5': 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X2.5.wav',
                        '7': 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X2.6.wav',
                    },
                    so: {
                        '1': 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X2.1.mp3',
                        '2': 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X2.2.mp3',
                        '3': 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X2.3.mp3',
                        '4': 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X2.4.mp3',
                        '5': 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X2.5.mp3',
                        '7': 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X2.6.mp3',
                    },
                    maa: {
                        '1': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.1.mp3',
                        '2': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.2.mp3',
                        '3': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.3.mp3',
                        '4': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.4.mp3',
                        '5': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.5.mp3',
                        '7': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.6.mp3',
                    },
                    bnd: {
                        '1': 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X2.1.mp3',
                        '2': 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X2.2.mp3',
                        '3': 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X2.3.mp3',
                        '4': 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X2.4.mp3',
                        '5': 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X2.5.mp3',
                        '7': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.6.mp3',
                    },
                    bjn: {
                        '1': 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X2.1.mp3',
                        '2': 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X2.2.mp3',
                        '3': 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X2.3.mp3',
                        '4': 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X2.4.mp3',
                        '5': 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X2.5.mp3',
                        '7': 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X2.6.mp3',
                    },
                    bara: {
                        '1': 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X2.1.mp3',
                        '2': 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X2.2.mp3',
                        '3': 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X2.3.mp3',
                        '4': 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X2.4.mp3',
                        '5': 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X2.5.mp3',
                        '7': 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X2.6.mp3',
                    }
                },
                outro: {
                    en: 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X3.1.wav',
                    ny: 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X3.1.wav',
                    tog: 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X3.1.wav',
                    so: 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X3.1.mp3',
                    maa: 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X3.1.mp3',
                    bnd: 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X3.1mp3',
                    bjn: 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X3.1.mp3',
                    bara: 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X3.1.mp3'
                },
            },
            outro: {
                en: 'https://social-media-files.talktoloop.org/English/IVR-Format/X/X4.1.wav',
                ny: 'https://social-media-files.talktoloop.org/Nyanja/IVR-Format/X/X4.1.wav',
                tog: 'https://social-media-files.talktoloop.org/Tonga/IVR-Format/X/X4.1.wav',
                so: 'https://social-media-files.talktoloop.org/Somali-Maxatiri/IVR-Format/X/X4.1.mp3',
                maa: 'https://social-media-files.talktoloop.org/Somalia-Maay/IVR-Format/X/X4.1.mp3',
                bnd: 'https://social-media-files.talktoloop.org/Somali-Banadiri-Marka/IVR-Format/X/X4.1mp3',
                bjn: 'https://social-media-files.talktoloop.org/Somali-Baajuuni/IVR-Format/X/X4.1.mp3',
                bara: 'https://social-media-files.talktoloop.org/Somali-Barawani-Chimini/IVR-Format/X/X4.1.mp3'
            },
        },
    },
    delayOfNextAttempt: {
        2: 900,
        3: 3600,
    },
}

export const getRecordingFiles = (language: string): Recordings => {
    const recordings: Recordings = defaults.recordings;

    if (
        !recordings?.reply?.intro[language] ||
        !recordings.reply.outro[language] ||
        !recordings.reply.options ||
        !recordings.rejection.story.intro[language] ||
        !recordings.rejection.reply.intro[language] ||
        !recordings.publication?.story[language] ||
        !recordings.publication?.reply[language]
    ) {
        throw new Error(GET_READINGS_FAILED);
    }

    return recordings;
}