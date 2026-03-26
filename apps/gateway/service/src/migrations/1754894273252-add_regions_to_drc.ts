import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRegionsToDrc1754894273252 implements MigrationInterface {
    readonly drcRegions = [
        {
            name: "Bas-Uele",
            code: "CD52",
            children: [
                { name: "Aketi", code: "CD5204" },
                { name: "Ango", code: "CD5207" },
                { name: "Bambesa", code: "CD5209" },
                { name: "Bondo", code: "CD5206" },
                { name: "Buta", code: "CD5202" },
                { name: "Dingila", code: "CD5210" },
                { name: "Poko", code: "CD5208" },
            ],
        },
        {
            name: "Equateur",
            code: "CD41",
            children: [
                { name: "Basankusu", code: "CD4107" },
                { name: "Bikoro", code: "CD4102" },
                { name: "Bolomba", code: "CD4108" },
                { name: "Bomongo", code: "CD4104" },
                { name: "Ingende", code: "CD4109" },
                { name: "Lukolela", code: "CD4103" },
                { name: "Makanza", code: "CD4105" },
                { name: "Mbandaka", code: "CD4101" },
            ],
        },
        {
            name: "Haut-Katanga",
            code: "CD71",
            children: [
                { name: "Kambove", code: "CD7105" },
                { name: "Kasenga", code: "CD7107" },
                { name: "Kipushi", code: "CD7102" },
                { name: "Likasi", code: "CD7106" },
                { name: "Lubumbashi", code: "CD7101" },
                { name: "Mitwaba", code: "CD7108" },
                { name: "Pweto", code: "CD7109" },
                { name: "Sakania", code: "CD7104" },
            ],
        },
        {
            name: "Haut-Lomami",
            code: "CD73",
            children: [
                { name: "Bukama", code: "CD7306" },
                { name: "Kabongo", code: "CD7304" },
                { name: "Kamina", code: "CD7302" },
                { name: "Kaniama", code: "CD7303" },
                { name: "Malemba-Nkulu", code: "CD7305" },
            ],
        },
        {
            name: "Haut-Uele",
            code: "CD53",
            children: [
                { name: "Aba", code: "CD5306" },
                { name: "Dungu", code: "CD5305" },
                { name: "Faradje", code: "CD5307" },
                { name: "Isiro", code: "CD5301" },
                { name: "Niangara", code: "CD5303" },
                { name: "Rungu", code: "CD5302" },
                { name: "Wamba", code: "CD5311" },
                { name: "Watsa", code: "CD5309" },
            ],
        },
        {
            name: "Ituri",
            code: "CD54",
            children: [
                { name: "Ariwara", code: "CD5410" },
                { name: "Aru", code: "CD5409" },
                { name: "Bunia", code: "CD5401" },
                { name: "Djugu", code: "CD5405" },
                { name: "Ingbokolo", code: "CD5411" },
                { name: "Irumu", code: "CD5402" },
                { name: "Mahagi", code: "CD5407" },
                { name: "Mambasa", code: "CD5403" },
                { name: "Mongwalu", code: "CD5404" },
            ],
        },
        {
            name: "Kasai",
            code: "CD92",
            children: [
                { name: "Dekese", code: "CD9208" },
                { name: "Ilebo", code: "CD9205" },
                { name: "Kamonia", code: "CD9202" },
                { name: "Luebo", code: "CD9204" },
                { name: "Mweka", code: "CD9207" },
                { name: "Tshikapa", code: "CD9201" },
            ],
        },
        {
            name: "Kasai-Central",
            code: "CD91",
            children: [
                { name: "Demba", code: "CD9106" },
                { name: "Dibaya", code: "CD9102" },
                { name: "Dimbelenge", code: "CD9107" },
                { name: "Kananga", code: "CD9101" },
                { name: "Kazumba", code: "CD9105" },
                { name: "Luiza", code: "CD9104" },
                { name: "Tshimbulu", code: "CD9103" },
            ],
        },
        {
            name: "Kasai-Oriental",
            code: "CD82",
            children: [
                { name: "Kabeya-Kamwanga", code: "CD8207" },
                { name: "Katanda", code: "CD8209" },
                { name: "Lupatapata", code: "CD8204" },
                { name: "Lupatapata", code: "CD8208" },
                { name: "Mbuji-Mayi", code: "CD8201" },
                { name: "Miabi", code: "CD8205" },
                { name: "Tshilenge", code: "CD8202" },
            ],
        },
        {
            name: "Kishansa",
            code: "CD10",
            children: [
                { name: "Kinshasa", code: "CD1000" },
            ],
        },
        {
            name: "Kongo-Central",
            code: "CD91",
            children: [
                { name: "Bangu", code: "CD2012" },
                { name: "Boma", code: "CD2002" },
                { name: "Inkisi", code: "CD2018" },
                { name: "Kasangulu", code: "CD2015" },
                { name: "Kimvula", code: "CD2019" },
                { name: "Lukula", code: "CD2005" },
                { name: "Luozi", code: "CD2010" },
                { name: "Madimba", code: "CD2017" },
                { name: "Matadi", code: "CD2001" },
                { name: "Mbanza-Ngungu", code: "CD2013" },
                { name: "Moanda", code: "CD2003" },
                { name: "Seke-Banza", code: "CD2009" },
                { name: "Songololo", code: "CD2011" },
                { name: "Tshela", code: "CD2007" },
            ],
        },
        {
            name: "Kwango",
            code: "CD31",
            children: [
                { name: "Feshi", code: "CD3103" },
                { name: "Kahemba", code: "CD3105" },
                { name: "Kasongo-Lunda", code: "CD3107" },
                { name: "Kenge", code: "CD3102" },
                { name: "Popokabaka", code: "CD3108" },
            ],
        },
        {
            name: "Kwilu",
            code: "CD32",
            children: [
                { name: "Bagata", code: "CD3202" },
                { name: "Bandundu", code: "CD3201" },
                { name: "Bulungu", code: "CD3204" },
                { name: "Dibaya-Lubwe", code: "CD3209" },
                { name: "Gungu", code: "CD3210" },
                { name: "Idiofa", code: "CD3206" },
                { name: "Kikwit", code: "CD3203" },
                { name: "Mangai", code: "CD3208" },
                { name: "Masi-Manimba", code: "CD3212" },
            ],
        },
        {
            name: "Lomami",
            code: "CD81",
            children: [
                { name: "Kabinda", code: "CD8102" },
                { name: "Kamiji", code: "CD8105" },
                { name: "Lubao", code: "CD8108" },
                { name: "Luilu", code: "CD8104" },
                { name: "Mwene-Ditu", code: "CD8103" },
                { name: "Ngandajika", code: "CD8106" },
            ],
        },
        {
            name: "Lualaba",
            code: "CD72",
            children: [
                { name: "Kapanga", code: "CD7207" },
                { name: "Kasaji", code: "CD7204" },
                { name: "Kolwezi", code: "CD7201" },
                { name: "Lubudi", code: "CD7203" },
                { name: "Mutshatsha", code: "CD7202" },
                { name: "Sandoa", code: "CD7206" },
            ],
        },
        {
            name: "Mai-Ndombe",
            code: "CD33",
            children: [
                { name: "Kiri", code: "CD3303" },
                { name: "Kutu", code: "CD3306" },
                { name: "Kwamouth", code: "CD3307" },
                { name: "Mushie", code: "CD3311" },
                { name: "Nioki", code: "CD3305" },
                { name: "Oshwe", code: "CD3304" },
                { name: "Yumbi", code: "CD3310" },
            ],
        },
        {
            name: "Maniema",
            code: "CD63",
            children: [
                { name: "Kabambare", code: "CD6309" },
                { name: "Kailo", code: "CD6302" },
                { name: "Kalima", code: "CD6308" },
                { name: "Kasongo", code: "CD6311" },
                { name: "Kibombo", code: "CD6313" },
                { name: "Kindu", code: "CD6301" },
                { name: "Lubutu", code: "CD6305" },
                { name: "Namoya", code: "CD6310" },
                { name: "Pangi", code: "CD6307" },
                { name: "Punia", code: "CD6303" },
            ],
        },
        {
            name: "Mongala",
            code: "CD44",
            children: [
                { name: "Bongandanga", code: "CD4405" },
                { name: "Bumba", code: "CD4404" },
                { name: "Lisala", code: "CD4402" },
            ],
        },
        {
            name: "North Kivu",
            code: "CD61",
            children: [
                { name: "Beni", code: "CD6109" },
                { name: "Butembo", code: "CD6110" },
                { name: "Goma", code: "CD6101" },
                { name: "Lubero", code: "CD6105" },
                { name: "Masisi", code: "CD6103" },
                { name: "Nyiragongo", code: "CD6102" },
                { name: "Oïcha", code: "CD6107" },
                { name: "Rutshuru", code: "CD6111" },
                { name: "Walikale", code: "CD6104" },
            ],
        },
        {
            name: "Nord-Ubangi",
            code: "CD43",
            children: [
                { name: "Bosobolo", code: "CD4306" },
                { name: "Businga", code: "CD4305" },
                { name: "Gbadolite", code: "CD4301" },
                { name: "Mobayi-Mbongo", code: "CD4302" },
                { name: "Yakoma", code: "CD4304" },
            ],
        },
        {
            name: "Sankuru",
            code: "CD83",
            children: [
                { name: "Bena-Dibele", code: "CD8305" },
                { name: "Katako-Kombe", code: "CD8308" },
                { name: "Kole", code: "CD8306" },
                { name: "Lodja", code: "CD8303" },
                { name: "Lomela", code: "CD8307" },
                { name: "Lubefu", code: "CD8309" },
                { name: "Lusambo", code: "CD8302" },
                { name: "Tshumbe", code: "CD8311" },
            ],
        },
        {
            name: "Sud Kivu",
            code: "CD62",
            children: [
                { name: "Baraka", code: "CD6211" },
                { name: "Bukavu", code: "CD6201" },
                { name: "Fizi", code: "CD6210" },
                { name: "Idjwi", code: "CD6206" },
                { name: "Kabare", code: "CD6202" },
                { name: "Kalehe", code: "CD6205" },
                { name: "Kamituga", code: "CD6213" },
                { name: "Mwenga", code: "CD6212" },
                { name: "Shabunda", code: "CD6203" },
                { name: "Uvira", code: "CD6208" },
                { name: "Walungu", code: "CD6207" },
            ],
        },
        {
            name: "Sud-Ubangi",
            code: "CD42",
            children: [
                { name: "Budjala", code: "CD4203" },
                { name: "Gemena", code: "CD4202" },
                { name: "Kungu", code: "CD4204" },
                { name: "Libenge", code: "CD4205" },
                { name: "Zongo", code: "CD4206" },
            ],
        },
        {
            name: "Tanganyika",
            code: "CD74",
            children: [
                { name: "Kabalo", code: "CD7407" },
                { name: "Kalemie", code: "CD7402" },
                { name: "Kaoze", code: "CD7403" },
                { name: "Kongolo", code: "CD7409" },
                { name: "Manono", code: "CD7406" },
                { name: "Moba", code: "CD7404" },
                { name: "Nyunzu", code: "CD7410" },
            ],
        },
        {
            name: "Tshopo",
            code: "CD51",
            children: [
                { name: "Bafwasende", code: "CD5111" },
                { name: "Banalia", code: "CD5110" },
                { name: "Basoko", code: "CD5109" },
                { name: "Isangi", code: "CD5105" },
                { name: "Kisangani", code: "CD5101" },
                { name: "Opala", code: "CD5103" },
                { name: "Ubundu", code: "CD5102" },
                { name: "Yahuma", code: "CD5107" },
                { name: "Yangambi", code: "CD5106" },
            ],
        },
        {
            name: "Tshuapa",
            code: "CD45",
            children: [
                { name: "Befale", code: "CD4503" },
                { name: "Boende", code: "CD4502" },
                { name: "Bokungu", code: "CD4506" },
                { name: "Djolu", code: "CD4504" },
                { name: "Ikela", code: "CD4505" },
                { name: "Monkoto", code: "CD4507" },
            ],
        },
    ]


    public async up(queryRunner: QueryRunner): Promise<void> {
        const hasAreaCodeColumn = await queryRunner.hasColumn('country_administrative_area', 'area_code');
        if (!hasAreaCodeColumn) {
            await queryRunner.query(
                `ALTER TABLE country_administrative_area ADD COLUMN area_code varchar(32) NULL`
            );
        }

        await queryRunner.startTransaction();
        try {
            for (const prov of this.drcRegions) {
                const provinceInsert: any = await queryRunner.query(
                    `INSERT INTO country_administrative_area
            (has_child, country_id, parent_id, external_id, level, area_code, created_at)
           VALUES
            (1, 250, NULL, NULL, 1, ?, NOW())`,
                    [prov.code]
                );
                const provinceId =
                    provinceInsert?.insertId ??
                    provinceInsert?.[0]?.insertId ??
                    provinceInsert;

                await queryRunner.query(
                    `INSERT INTO country_administrative_area_name
            (administrative_area_id, language_id, name)
           VALUES (?, 1, ?)`,
                    [provinceId, prov.name]
                );

                for (const child of prov.children) {
                    const childInsert: any = await queryRunner.query(
                        `INSERT INTO country_administrative_area
              (has_child, country_id, parent_id, external_id, level, area_code, created_at)
             VALUES
              (0, ?, ?, NULL, 2, ?, NOW())`,
                        [250, provinceId, child.code]
                    );
                    const childId =
                        childInsert?.insertId ??
                        childInsert?.[0]?.insertId ??
                        childInsert;

                    await queryRunner.query(
                        `INSERT INTO country_administrative_area_name
              (administrative_area_id, language_id, name)
             VALUES (?, 1, ?)`,
                        [childId, child.name]
                    );
                }
            }

            await queryRunner.commitTransaction();
        } catch (err) {
            await queryRunner.rollbackTransaction();
            throw err;
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.startTransaction();
        try {
            await queryRunner.query(
                `DELETE cn FROM country_administrative_area_name cn
         JOIN country_administrative_area ca ON ca.id = cn.administrative_area_id
         WHERE ca.country_id = ? AND ca.area_code IS NOT NULL`,
                [250]
            );

            await queryRunner.query(
                `DELETE FROM country_administrative_area
         WHERE country_id = ? AND area_code IS NOT NULL`,
                [250]
            );

            await queryRunner.query(
                `ALTER TABLE country_administrative_area DROP COLUMN area_code`
            );

            await queryRunner.commitTransaction();
        } catch (err) {
            await queryRunner.rollbackTransaction();
            throw err;
        }
    }
}
