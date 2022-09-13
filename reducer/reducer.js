export const initalState = {
    "show_data":false,
    "show_sidebar_data":false,
    "show_infoBox_data": false,
    "show_sidebar":true,
    "level":1,
    "show_area_of_interest": false,
    "socioeconomic": {
        "status": false,
        "data": [
            {
                id: 1,
                slug: 'se_social_vulnerability',
                title: 'Social Vulnerability',
                data: [
                    {
                        id: 1.1,
                        slug: 'se_random_forest',
                        title: 'SV: Random Forest',
                        status: false,
                        value: 70
                    },
                    {
                        id: 1.2,
                        slug: 'se_xgboost',
                        title: 'SV: XGBoost',
                        status: false,
                        value: 70
                    },
                ]
            },
            {
                id: 2,
                slug: 'se_drive_time',
                title: 'Drive Time',
                data: [
                    {
                        id: 2.1,
                        slug: 'se_education_facility',
                        title: 'DT: Education Facility',
                        status: false,
                        value: 70
                    },
                    {
                        id: 2.2,
                        slug: 'se_health_institution',
                        title: 'DT: Health Institution',
                        status: false,
                        value: 70
                    },
                    {
                        id: 2.3,
                        slug: 'se_financial_service',
                        title: 'DT: Financial Service',
                        status: false,
                        value: 70
                    },
                ]
            },
            {
                id: 3,
                slug: 'se_socio_economic',
                title: 'Socio Economic',
                data: [
                    {
                        id: 3.1,
                        slug: 'se_population_counts',
                        title: 'Population Counts',
                        status: false,
                        value: 70
                    },
                    {
                        id: 3.2,
                        slug: 'se_celltowers',
                        title: 'Celltowers',
                        status: false,
                        value: 70
                    },
                    {
                        id: 3.3,
                        slug: 'se_nightlight_intensity',
                        title: 'Nightlight Intensity',
                        status: false,
                        value: 70
                    },
                    {
                        id: 3.4,
                        slug: 'se_relative_wealth',
                        title: 'Relative Wealth',
                        status: false,
                        value: 70
                    },
                    {
                        id: 3.5,
                        slug: 'se_GDP',
                        title: 'GDP',
                        status: false,
                        value: 70
                    }
                ]
            },
            {
                id: 4,
                slug: 'se_bio_physical',
                title: 'Bio-Physical',
                data: [
                    {
                        id: 4.1,
                        slug: 'se_plant_health',
                        title: 'Plant Health',
                        status: false,
                        value: 70
                    },
                    {
                        id: 4.2,
                        slug: 'se_temperature_max',
                        title: 'Temperature (Max)',
                        status: false,
                        value: 70
                    },
                    {
                        id: 4.3,
                        slug: 'se_land_use_class',
                        title: 'Land Use Class',
                        status: false,
                        value: 70
                    },
                    {
                        id: 4.4,
                        slug: 'se_elevation',
                        title: 'Elevation',
                        status: false,
                        value: 70
                    }
                ]
            }
                // {
                //     id: 7,
                //     slug: 'educational_facilities',
                //     title: 'Educational Facilities',
                //     status: false,
                //     value: 70,
                //     priority:7,
                //     "legend":[
                //         {
                //             status:true,
                //             position:'topbar',
                //             title:"Educational Facilities",
                //             description:"Hover on map tile to see more data"
                //         },
                //         {
                //             status:false
                //         }
                //     ]
                // },
        ]
    },
    "geodata": {
        "status": false,
        "data": [
            {
                id: 1,
                slug: 'social_vulnerability',
                title: 'Social Vulnerability',
                data: [
                    {
                        id: 1.1,
                        slug: 'sv_linear_model',
                        title: 'SV: Linear Model',
                        status: false,
                        value: 70
                    },
                    {
                        id: 1.2,
                        slug: 'sv_xgboost',
                        title: 'SV: XG Boost',
                        status: false,
                        value: 70
                    },
                    {
                        id: 1.3,
                        slug: 'sv_random_forest',
                        title: 'SV: Random Forest',
                        status: false,
                        value: 70
                    }

                ]
            },
            {
                id: 2,
                slug: 'distance_maps',
                title: 'Distance Maps',
                data: [
                    {
                        id: 2.1,
                        slug: 'distance_to_healthcare',
                        title: 'Distance to Healthcare',
                        status: false,
                        value: 70
                    },
                    {
                        id: 2.2,
                        slug: 'distance_to_finance',
                        title: 'Distance to Finance',
                        status: false,
                        value: 70
                    },
                    {
                        id: 2.3,
                        slug: 'distance_to_edu',
                        title: 'Distance to Education',
                        status: false,
                        value: 70
                    }

                ]
            },
            {
                id: 3,
                slug: 'bio_physical',
                title: 'Bio Physical Layers',
                data: [
                    {
                        id: 3.1,
                        slug: 'elevation',
                        title: 'Elevation in meters',
                        status: false,
                        value: 70
                    },
                    {
                        id: 3.2,
                        slug: 'slope',
                        title: 'Slope in degrees',
                        status: false,
                        value: 70
                    },
                    {
                        id: 3.3,
                        slug: 'max_temp',
                        title: 'Max Temp Winter',
                        status: false,
                        value: 70
                    },
                    {
                        id: 3.4,
                        slug: 'plant_health',
                        title: 'Plant Health (NDVI)',
                        status: false,
                        value: 70
                    },
                    {
                        id: 3.5,
                        slug: 'precipitation',
                        title: 'Rainfall',
                        status: false,
                        value: 70
                    }
                ]
            },
            {
                id: 4,
                slug: 'socio_economic',
                title: 'Socio Economic',
                data: [
                    {
                        id: 4.1,
                        slug: 'nightlight_intensity',
                        title: 'Nightlight Intensity',
                        status: false,
                        value: 70
                    },
                    {
                        id: 4.2,
                        slug: 'pop_density',
                        title: 'Population Density',
                        status: false,
                        value: 70
                    },
                    {
                        id: 4.3,
                        slug: 'celltower',
                        title: 'Celltower Density',
                        status: false,
                        value: 70
                    },
                    {
                        id: 4.4,
                        slug: 'road_density',
                        title: 'Road Density',
                        status: false,
                        value: 70
                    },
                    {
                        id: 4.5,
                        slug: 'relative_wealth',
                        title: 'Relative Wealth',
                        status: false,
                        value: 70
                    },
                    {
                        id: 4.6,
                        slug: 'gdp',
                        title: 'Gross Domestic Product',
                        status: false,
                        value: 70
                    }
                ]
            }
        ]
    },
    "vulnerability": false,
    "categories": [{
        id: 1, title: "Very Low", slug: 'very_low', color: 'rgb(59 130 246)', status: true
    }, {
        id: 2, title: "Low", slug: 'low', color: 'rgb(34 197 94)', status: true
    }, {
        id: 3, title: "Middle", slug: 'middle', color: 'rgb(234 179 8)', status: true
    }, {
        id: 4, title: "High", slug: 'high', color: 'rgb(249 115 22)', status: true
    }, {
        id: 5, title: "Very High", slug: 'very_high', color: 'rgb(239 68 68)', status: true
    }],
    "dsv_indicator": false,
    "data_column": [{
        id: 0, slug: 'select_none', title: 'SELECT_NONE', status: false
    }, {
        id: 1, slug: 'Main floor material', title: 'Main floor material', status: false
    }, {
        id: 2,
        slug: 'Number of household members (listed)',
        title: 'Number of household members (listed)',
        status: false
    }, {
        id: 3, slug: 'Frequency of listening to radio', title: 'Frequency of listening to radio', status: false
    }, {
        id: 4, slug: 'Age of household head', title: 'Age of household head', status: false
    }, {
        id: 5, slug: 'Time to get to water source', title: 'Time to get to water source', status: false
    }, {
        id: 6,
        slug: 'Beating justified if wife goes out without telling husband',
        title: 'Beating justified if wife goes out without telling husband',
        status: false
    }, {
        id: 7,
        slug: 'Getting medical help for self: distance to health facility',
        title: 'Getting medical help for self: distance to health facility',
        status: false
    }, {
        id: 8, slug: 'Wealth index combined', title: 'Wealth index combined', status: false
    }, {
        id: 9, slug: 'How often uses internet', title: 'How often uses internet', status: false
    }, {
        id: 10, slug: 'Annual_Precipitation_2000', title: 'Annual_Precipitation_2000', status: false
    }, {
        id: 11, slug: 'Aridity_2000', title: 'Aridity_2000', status: false
    }, {
        id: 12, slug: 'BUILT_Population_1990', title: 'BUILT_Population_1990', status: false
    }, {
        id: 13, slug: 'Annual_Precipitation_2010', title: 'Annual_Precipitation_2010', status: false
    }, {
        id: 14, slug: 'BUILT_Population_2014', title: 'BUILT_Population_2014', status: false
    }, {
        id: 15, slug: 'Day_Land_Surface_Temp_2015', title: 'Day_Land_Surface_Temp_2015', status: false
    }, {
        id: 16, slug: 'Day_Land_Surface_Temp_2005', title: 'Day_Land_Surface_Temp_2005', status: false
    }],
    "selected_data_column": "0",
    "dhs_indicator": false,
    "dhs_data_column": [],
    /*"dhs_data_column": [
        {
            id: 0,
            slug: 'select_none',
            title: 'SELECT_NONE',
            status: false
        },
        {
            "id": 1,
            "slug": "Cluster number",
            "title": "Cluster number",
            "status": false
        },
        {
            "id": 2,
            "slug": "URBAN_RURA",
            "title": "URBAN_RURA",
            "status": false
        },
        {
            "id": 3,
            "slug": "Age of household head",
            "title": "Age of household head",
            "status": false
        },
        {
            "id": 4,
            "slug": "Average diastolic blood pressure",
            "title": "Average diastolic blood pressure",
            "status": false
        },
        {
            "id": 5,
            "slug": "Average systolic blood pressure",
            "title": "Average systolic blood pressure",
            "status": false
        },
        {
            "id": 6,
            "slug": "Body Mass Index",
            "title": "Body Mass Index",
            "status": false
        },
        {
            "id": 7,
            "slug": "Currently amenorrheic",
            "title": "Currently amenorrheic",
            "status": false
        },
        {
            "id": 8,
            "slug": "Drank/ate: Any dark green, leafy vegetables",
            "title": "Drank/ate: Any dark green, leafy vegetables",
            "status": false
        },
        {
            "id": 9,
            "slug": "Drank/ate: Any meat",
            "title": "Drank/ate: Any meat",
            "status": false
        },
        {
            "id": 10,
            "slug": "Drank/ate: Any oil, fats, or butter, or foods made with any of these",
            "title": "Drank/ate: Any oil, fats, or butter, or foods made with any of these",
            "status": false
        },
        {
            "id": 11,
            "slug": "Drank/ate: Any other beverages or foods",
            "title": "Drank/ate: Any other beverages or foods",
            "status": false
        },
        {
            "id": 12,
            "slug": "Drank/ate: Any other fruits",
            "title": "Drank/ate: Any other fruits",
            "status": false
        },
        {
            "id": 13,
            "slug": "Drank/ate: Any other vegetables",
            "title": "Drank/ate: Any other vegetables",
            "status": false
        },
        {
            "id": 14,
            "slug": "Drank/ate: Any savory and fried snacks",
            "title": "Drank/ate: Any savory and fried snacks",
            "status": false
        },
        {
            "id": 15,
            "slug": "Drank/ate: Any sugar-sweetened beverages",
            "title": "Drank/ate: Any sugar-sweetened beverages",
            "status": false
        },
        {
            "id": 16,
            "slug": "Drank/ate: Any sweets such as sugary foods",
            "title": "Drank/ate: Any sweets such as sugary foods",
            "status": false
        },
        {
            "id": 17,
            "slug": "Drank/ate: Condiments for flavor",
            "title": "Drank/ate: Condiments for flavor",
            "status": false
        },
        {
            "id": 18,
            "slug": "Drank/ate: Eggs",
            "title": "Drank/ate: Eggs",
            "status": false
        },
        {
            "id": 19,
            "slug": "Drank/ate: Food made of grains",
            "title": "Drank/ate: Food made of grains",
            "status": false
        },
        {
            "id": 20,
            "slug": "Drank/ate: Foods made from beans or peas (fresh or dried seed), lentils or bean",
            "title": "Drank/ate: Foods made from beans or peas (fresh or dried seed), lentils or bean",
            "status": false
        },
        {
            "id": 21,
            "slug": "Drank/ate: Fresh, canned or dried fish or seafood",
            "title": "Drank/ate: Fresh, canned or dried fish or seafood",
            "status": false
        },
        {
            "id": 22,
            "slug": "Drank/ate: Liver, kidney, heart, or other organ meats or blood-based foods",
            "title": "Drank/ate: Liver, kidney, heart, or other organ meats or blood-based foods",
            "status": false
        },
        {
            "id": 23,
            "slug": "Drank/ate: Milk, cheese or other food made from milk",
            "title": "Drank/ate: Milk, cheese or other food made from milk",
            "status": false
        },
        {
            "id": 24,
            "slug": "Drank/ate: Potatoes, potato chips, banana chips or any other foods made from roo",
            "title": "Drank/ate: Potatoes, potato chips, banana chips or any other foods made from roo",
            "status": false
        },
        {
            "id": 25,
            "slug": "Drank/ate: Ripe persimmons, or ripe fresh apricots, dried apricots or dried peac",
            "title": "Drank/ate: Ripe persimmons, or ripe fresh apricots, dried apricots or dried peac",
            "status": false
        },
        {
            "id": 26,
            "slug": "Drank/ate: Sweet red bell pepper, pumpkin or carrots that are yellow or orange i",
            "title": "Drank/ate: Sweet red bell pepper, pumpkin or carrots that are yellow or orange i",
            "status": false
        },
        {
            "id": 27,
            "slug": "Drank/ate: Tree nuts",
            "title": "Drank/ate: Tree nuts",
            "status": false
        },
        {
            "id": 28,
            "slug": "Education in single years",
            "title": "Education in single years",
            "status": false
        },
        {
            "id": 29,
            "slug": "Educational attainment",
            "title": "Educational attainment",
            "status": false
        },
        {
            "id": 30,
            "slug": "Ever been tested for HIV",
            "title": "Ever been tested for HIV",
            "status": false
        },
        {
            "id": 31,
            "slug": "Ever heard of a Sexually Transmitted Infection (STI)",
            "title": "Ever heard of a Sexually Transmitted Infection (STI)",
            "status": false
        },
        {
            "id": 32,
            "slug": "Ever heard of AIDS",
            "title": "Ever heard of AIDS",
            "status": false
        },
        {
            "id": 33,
            "slug": "Ever used anything or tried to delay or avoid getting pregnant",
            "title": "Ever used anything or tried to delay or avoid getting pregnant",
            "status": false
        },
        {
            "id": 34,
            "slug": "Frequency of listening to radio",
            "title": "Frequency of listening to radio",
            "status": false
        },
        {
            "id": 35,
            "slug": "Frequency of reading newspaper or magazine",
            "title": "Frequency of reading newspaper or magazine",
            "status": false
        },
        {
            "id": 36,
            "slug": "Frequency of using internet last month",
            "title": "Frequency of using internet last month",
            "status": false
        },
        {
            "id": 37,
            "slug": "Frequency of watching television",
            "title": "Frequency of watching television",
            "status": false
        },
        {
            "id": 38,
            "slug": "Getting medical help for self: distance to health facility",
            "title": "Getting medical help for self: distance to health facility",
            "status": false
        },
        {
            "id": 39,
            "slug": "Getting medical help for self: getting money needed for treatment",
            "title": "Getting medical help for self: getting money needed for treatment",
            "status": false
        },
        {
            "id": 40,
            "slug": "Getting medical help for self: getting permission to go",
            "title": "Getting medical help for self: getting permission to go",
            "status": false
        },
        {
            "id": 41,
            "slug": "Getting medical help for self: not wanting to go alone",
            "title": "Getting medical help for self: not wanting to go alone",
            "status": false
        },
        {
            "id": 42,
            "slug": "Had any STI in last 12 months",
            "title": "Had any STI in last 12 months",
            "status": false
        },
        {
            "id": 43,
            "slug": "Has an account in a bank or other financial institution",
            "title": "Has an account in a bank or other financial institution",
            "status": false
        },
        {
            "id": 44,
            "slug": "Hemoglobin level (g/dl - 1 decimal)",
            "title": "Hemoglobin level (g/dl - 1 decimal)",
            "status": false
        },
        {
            "id": 45,
            "slug": "Highest educational level",
            "title": "Highest educational level",
            "status": false
        },
        {
            "id": 46,
            "slug": "Highest year of education",
            "title": "Highest year of education",
            "status": false
        },
        {
            "id": 47,
            "slug": "Household has: bicycle",
            "title": "Household has: bicycle",
            "status": false
        },
        {
            "id": 48,
            "slug": "Household has: car/truck",
            "title": "Household has: car/truck",
            "status": false
        },
        {
            "id": 49,
            "slug": "Household has: electricity",
            "title": "Household has: electricity",
            "status": false
        },
        {
            "id": 50,
            "slug": "Household has: motorcycle/scooter",
            "title": "Household has: motorcycle/scooter",
            "status": false
        },
        {
            "id": 51,
            "slug": "Household has: radio",
            "title": "Household has: radio",
            "status": false
        },
        {
            "id": 52,
            "slug": "Household has: refrigerator",
            "title": "Household has: refrigerator",
            "status": false
        },
        {
            "id": 53,
            "slug": "Household has: telephone (land-line)",
            "title": "Household has: telephone (land-line)",
            "status": false
        },
        {
            "id": 54,
            "slug": "Household has: television",
            "title": "Household has: television",
            "status": false
        },
        {
            "id": 55,
            "slug": "Literacy",
            "title": "Literacy",
            "status": false
        },
        {
            "id": 56,
            "slug": "Main floor material",
            "title": "Main floor material",
            "status": false
        },
        {
            "id": 57,
            "slug": "Main roof material",
            "title": "Main roof material",
            "status": false
        },
        {
            "id": 58,
            "slug": "Main wall material",
            "title": "Main wall material",
            "status": false
        },
        {
            "id": 59,
            "slug": "Menstruated in last six weeks",
            "title": "Menstruated in last six weeks",
            "status": false
        },
        {
            "id": 60,
            "slug": "Owns a house alone or jointly",
            "title": "Owns a house alone or jointly",
            "status": false
        },
        {
            "id": 61,
            "slug": "Owns a mobile telephone",
            "title": "Owns a mobile telephone",
            "status": false
        },
        {
            "id": 62,
            "slug": "Region",
            "title": "Region",
            "status": false
        },
        {
            "id": 63,
            "slug": "Respondent currently working",
            "title": "Respondent currently working",
            "status": false
        },
        {
            "id": 64,
            "slug": "Respondent worked in last 12 months",
            "title": "Respondent worked in last 12 months",
            "status": false
        },
        {
            "id": 65,
            "slug": "Respondent's current age",
            "title": "Respondent's current age",
            "status": false
        },
        {
            "id": 66,
            "slug": "Respondent's height in centimeters (1 decimal)",
            "title": "Respondent's height in centimeters (1 decimal)",
            "status": false
        },
        {
            "id": 67,
            "slug": "Respondent's occupation (grouped)",
            "title": "Respondent's occupation (grouped)",
            "status": false
        },
        {
            "id": 68,
            "slug": "Respondent's weight in kilograms (1 decimal)",
            "title": "Respondent's weight in kilograms (1 decimal)",
            "status": false
        },
        {
            "id": 69,
            "slug": "Sex of household head",
            "title": "Sex of household head",
            "status": false
        },
        {
            "id": 70,
            "slug": "Smokes cigarettes",
            "title": "Smokes cigarettes",
            "status": false
        },
        {
            "id": 71,
            "slug": "Source of drinking water",
            "title": "Source of drinking water",
            "status": false
        },
        {
            "id": 72,
            "slug": "Time to get to water source",
            "title": "Time to get to water source",
            "status": false
        },
        {
            "id": 73,
            "slug": "Total children ever born",
            "title": "Total children ever born",
            "status": false
        },
        {
            "id": 74,
            "slug": "Type of toilet facility",
            "title": "Type of toilet facility",
            "status": false
        },
        {
            "id": 75,
            "slug": "Use of internet",
            "title": "Use of internet",
            "status": false
        },
        {
            "id": 76,
            "slug": "Wealth index combined",
            "title": "Wealth index combined",
            "status": false
        },
        {
            "id": 77,
            "slug": "Years lived in place of residence",
            "title": "Years lived in place of residence",
            "status": false
        },
        {
            "id": 78,
            "slug": "Age of household members",
            "title": "Age of household members",
            "status": false
        },
        {
            "id": 79,
            "slug": "Agricultural equipment",
            "title": "Agricultural equipment",
            "status": false
        },
        {
            "id": 80,
            "slug": "Anything done to water to make safe to drink",
            "title": "Anything done to water to make safe to drink",
            "status": false
        },
        {
            "id": 81,
            "slug": "Bed",
            "title": "Bed",
            "status": false
        },
        {
            "id": 82,
            "slug": "Believes physical punishment necessary for child disciplinning",
            "title": "Believes physical punishment necessary for child disciplinning",
            "status": false
        },
        {
            "id": 83,
            "slug": "Car",
            "title": "Car",
            "status": false
        },
        {
            "id": 84,
            "slug": "Chair",
            "title": "Chair",
            "status": false
        },
        {
            "id": 85,
            "slug": "Electric fan",
            "title": "Electric fan",
            "status": false
        },
        {
            "id": 86,
            "slug": "Food cooked in the house/ separate building/ outdoors",
            "title": "Food cooked in the house/ separate building/ outdoors",
            "status": false
        },
        {
            "id": 87,
            "slug": "Freezer",
            "title": "Freezer",
            "status": false
        },
        {
            "id": 88,
            "slug": "Fuel or wood stock",
            "title": "Fuel or wood stock",
            "status": false
        },
        {
            "id": 89,
            "slug": "Has a computer",
            "title": "Has a computer",
            "status": false
        },
        {
            "id": 90,
            "slug": "Has bicycle",
            "title": "Has bicycle",
            "status": false
        },
        {
            "id": 91,
            "slug": "Has mobile telephone",
            "title": "Has mobile telephone",
            "status": false
        },
        {
            "id": 92,
            "slug": "Has motorcycle/scooter",
            "title": "Has motorcycle/scooter",
            "status": false
        },
        {
            "id": 93,
            "slug": "Has refrigerator",
            "title": "Has refrigerator",
            "status": false
        },
        {
            "id": 94,
            "slug": "Has telephone (land-line)",
            "title": "Has telephone (land-line)",
            "status": false
        },
        {
            "id": 95,
            "slug": "Has watch",
            "title": "Has watch",
            "status": false
        },
        {
            "id": 96,
            "slug": "Highest educational level attained",
            "title": "Highest educational level attained",
            "status": false
        },
        {
            "id": 97,
            "slug": "Highest grade completed",
            "title": "Highest grade completed",
            "status": false
        },
        {
            "id": 98,
            "slug": "Highest year of education completed",
            "title": "Highest year of education completed",
            "status": false
        },
        {
            "id": 99,
            "slug": "Location of toilet facility",
            "title": "Location of toilet facility",
            "status": false
        },
        {
            "id": 100,
            "slug": "Member of the household worked abroad for three or more months in the last 3 yea",
            "title": "Member of the household worked abroad for three or more months in the last 3 yea",
            "status": false
        },
        {
            "id": 101,
            "slug": "Mini-generator ('dvizhok')",
            "title": "Mini-generator ('dvizhok')",
            "status": false
        },
        {
            "id": 102,
            "slug": "Native language of respondent",
            "title": "Native language of respondent",
            "status": false
        },
        {
            "id": 103,
            "slug": "Number of children 5 and under (de jure)",
            "title": "Number of children 5 and under (de jure)",
            "status": false
        },
        {
            "id": 104,
            "slug": "Number of de facto members",
            "title": "Number of de facto members",
            "status": false
        },
        {
            "id": 105,
            "slug": "Number of rooms used for sleeping",
            "title": "Number of rooms used for sleeping",
            "status": false
        },
        {
            "id": 106,
            "slug": "Owns Bee hives",
            "title": "Owns Bee hives",
            "status": false
        },
        {
            "id": 107,
            "slug": "Owns cattle",
            "title": "Owns cattle",
            "status": false
        },
        {
            "id": 108,
            "slug": "Owns chickens/poultry",
            "title": "Owns chickens/poultry",
            "status": false
        },
        {
            "id": 109,
            "slug": "Owns cows/ bulls",
            "title": "Owns cows/ bulls",
            "status": false
        },
        {
            "id": 110,
            "slug": "Owns Fur animals",
            "title": "Owns Fur animals",
            "status": false
        },
        {
            "id": 111,
            "slug": "Owns goats",
            "title": "Owns goats",
            "status": false
        },
        {
            "id": 112,
            "slug": "Owns horses/ donkeys/ mules",
            "title": "Owns horses/ donkeys/ mules",
            "status": false
        },
        {
            "id": 113,
            "slug": "Owns land usable for agriculture",
            "title": "Owns land usable for agriculture",
            "status": false
        },
        {
            "id": 114,
            "slug": "Owns livestock, herds or farm animals",
            "title": "Owns livestock, herds or farm animals",
            "status": false
        },
        {
            "id": 115,
            "slug": "Owns Pigs",
            "title": "Owns Pigs",
            "status": false
        },
        {
            "id": 116,
            "slug": "Owns Rabbits",
            "title": "Owns Rabbits",
            "status": false
        },
        {
            "id": 117,
            "slug": "Owns sheep",
            "title": "Owns sheep",
            "status": false
        },
        {
            "id": 118,
            "slug": "Place where household members wash their hands",
            "title": "Place where household members wash their hands",
            "status": false
        },
        {
            "id": 119,
            "slug": "Satellite antenna/dish",
            "title": "Satellite antenna/dish",
            "status": false
        },
        {
            "id": 120,
            "slug": "Sex of head of household",
            "title": "Sex of head of household",
            "status": false
        },
        {
            "id": 121,
            "slug": "Sex of household member",
            "title": "Sex of household member",
            "status": false
        },
        {
            "id": 122,
            "slug": "Share toilet with other households",
            "title": "Share toilet with other households",
            "status": false
        },
        {
            "id": 123,
            "slug": "Time to get to water source (minutes)",
            "title": "Time to get to water source (minutes)",
            "status": false
        },
        {
            "id": 124,
            "slug": "Total number of completed years of schooling",
            "title": "Total number of completed years of schooling",
            "status": false
        },
        {
            "id": 125,
            "slug": "Tractor",
            "title": "Tractor",
            "status": false
        },
        {
            "id": 126,
            "slug": "Truck",
            "title": "Truck",
            "status": false
        },
        {
            "id": 127,
            "slug": "Type of place of residence",
            "title": "Type of place of residence",
            "status": false
        },
        {
            "id": 128,
            "slug": "Washing machine",
            "title": "Washing machine",
            "status": false
        },
        {
            "id": 129,
            "slug": "Water usually treated by: boil",
            "title": "Water usually treated by: boil",
            "status": false
        },
        {
            "id": 130,
            "slug": "Water usually treated by: don't know",
            "title": "Water usually treated by: don't know",
            "status": false
        },
        {
            "id": 131,
            "slug": "Water usually treated by: let it stand and settle",
            "title": "Water usually treated by: let it stand and settle",
            "status": false
        },
        {
            "id": 132,
            "slug": "Water usually treated by: other",
            "title": "Water usually treated by: other",
            "status": false
        },
        {
            "id": 133,
            "slug": "Water usually treated by: solar disinfection",
            "title": "Water usually treated by: solar disinfection",
            "status": false
        },
        {
            "id": 134,
            "slug": "Water usually treated by: strain through a cloth",
            "title": "Water usually treated by: strain through a cloth",
            "status": false
        },
        {
            "id": 135,
            "slug": "Water usually treated by: use water filter",
            "title": "Water usually treated by: use water filter",
            "status": false
        }
    ],*/
    "selected_dhs_data_column": "0",
    "draw_area_of_interest": false,
    "statistics": false,
    "csv_data": [],
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_SHOW_DATA":
            return {
                ...state, show_data: !state.show_data,
            };
        case "TOGGLE_SIDEBAR_DATA":
            return {
                ...state, show_sidebar_data: !state.show_sidebar_data,
            };
        case "TOGGLE_INFOBOX_DATA":
            return {
                ...state,
                show_infoBox_data: !state.show_infoBox_data
            }
        case "TOGGLE_SIDEBAR":
            return {
                ...state, show_sidebar: !state.show_sidebar,
            };

            case "CHANGE_LEVEL":
                console.log("payload"+JSON.stringify(action.payload));
                return {
                    ...state,
                    level: action.payload.level,
                };
        case "TOGGLE_AREA_OF_INTEREST":
            return {
                ...state, show_area_of_interest: !state.show_area_of_interest,
            };

        case "TOGGLE_SOCIOECONOMIC":
            return {
                ...state, socioeconomic: {
                    status: !state.socioeconomic.status, data: state.socioeconomic.data
                }
            };
        case "CHANGE_SOCIOECONOMIC":
            return {
                ...state, socioeconomic: {
                    status: state.socioeconomic.status, data: action.payload
                }
            };
        case "TOGGLE_GEODATA":
            return {
                ...state, geodata: {
                    status: !state.geodata.status, data: state.geodata.data
                }
            };
        case "CHANGE_GEODATA":
            return {
                ...state, geodata: {
                    status: state.geodata.status, data: action.payload
                }
            };
        case "TOGGLE_VULNERABILTY":
            return {
                ...state, vulnerability: !state.vulnerability,
            };
        case "CHANGE_CATEGORIES":
            return {
                ...state, categories: action.payload
            };
        case "TOGGLE_DSV_INDICATOR":
            return {
                ...state, dsv_indicator: !state.dsv_indicator,
            };
        case "SELECT_DATA_COLUMN":
            return {
                ...state, selected_data_column: action.payload,
            };

        case "TOGGLE_DHS_INDICATOR":
            return {
                ...state,
                dhs_indicator: !state.dhs_indicator
            }
        case "SELECT_DHS_DATA_COLUMN":
            return {
                ...state,
                selected_dhs_data_column: action.payload
            }
        case "TOGGLE_DRAW_OF_INTEREST":
            return {
                ...state, draw_area_of_interest: !state.draw_area_of_interest,
            };
        case "TOGGLE_STATISTICS":
            return {
                ...state, show_statistics: !state.show_statistics,
            };
        case "FETCH_CSV_DATA":
            return {
                ...state,
                csv_data: action.payload
            };
        case "FETCH_DHS_COLUMN":
            return {
                ...state,
                dhs_data_column: action.payload
            };
        default:
            return state
    }
}
