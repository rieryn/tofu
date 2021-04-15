import scrapy
import json
import scrapy

term = '202101'  


subjects = [
"ALSU",
"AEDT",
"APBS",
"AUTE",
"BIOL",
"BUSI",
"CHEM",
"COMM",
"CSCI",
"CRMN",
"ECON",
"EDUC",
"ELEE",
"ESNS",
"ENGR",
"EAP",
"ENVS",
"FSCI",
"HLSC",
"INFR",
"KINE",
"LGLS",
"MANE",
"MITS",
"MTSC",
"MATH",
"MECE",
"METE",
"MLSC",
"MCSC",
"NUCL",
"NURS",
"PHY",
"POSC",
"PSYC",
"RADI",
"SCCO",
"SSCI",
"SOCI",
"SOFE",
"STAT",
]

class OfuSpider(scrapy.Spider):
    name = "tofu"
    start_urls = ['https://ssbp.mycampus.ca/prod_uoit/bwckschd.p_disp_dyn_sched?TRM=U']
    output = []

    def parse(self, response):
        yield scrapy.FormRequest.from_response(
            response=response,
            formdata={'p_term': term},
            callback=self.parseSubj
        )

    def parseSubj(self, response):
        for subject in subjects:
            yield scrapy.FormRequest.from_response(
                response=response,
                formdata={'SEL_SUBJ': subject},
                callback=self.parseCourse,
            )

    def parseCourse(self, response):
        with open("test10.html", 'w') as file:
            output = []
            index = 0
            count = 0
            subj = ""
            for i in response.xpath(
                '//th[@class = "ddheader"]/text()'):
                j = i.get().split('-')
                subj = j[2].strip().split(' ')[0]
                output.append({"coursename":j[0].strip()})
                output[index]["crn"] = j[1].strip()
                output[index]["coursecode"] =j[2].strip()
                output[index]["section"] = j[3].strip()

                file.write(i.get()+"\n")
                index+=1
                print(index)
            index = 0
            count = 0
            ihatethis = []
            
            for i in response.xpath(
                '//*[@summary="This layout table is used to present the seating numbers."]/tr[2]'):
                output[index]["capacity"] = (i.xpath('td[2]//text()').get())
                output[index]["filled"] = (i.xpath('td[3]//text()').get())
                output[index]["remaining"] = (i.xpath('td[4]//text()').get())
                index+=1
            index = 0
            for i in response.xpath(
                '//*[@summary="This table lists the scheduled meeting times and assigned instructors for this class."]/tr[2]'):
                output[index]["time"] = (i.xpath('td[2]//text()').get())
                output[index]["days"] = (i.xpath('td[3]//text()').get())
                output[index]["location"] = (i.xpath('td[4]//text()').get())
                output[index]["daterange"] = (i.xpath('td[5]//text()').get())
                output[index]["type"] = (i.xpath('td[6]//text()').get())
                output[index]["instructor"] = (i.xpath('td[7]//text()').get())
                index +=1
                file.write((i.get() or "none")+"\n")
            index = 0

            j = []
            garbage = ""
            for i in response.xpath(
                '//td[@class = "dddefault"]/text()'):
                file.write(i.get()+"\n")
                garbage+=i.get()
            garbage = garbage.strip()
            garbage = garbage.split('Winter')
            index = 0
            for i in garbage:
                if i == '':
                    continue
                i = 'Winter'+i
                output[index]["reqs"] = i
                index+=1
            index = 0

            with open('%s.json' %subj, 'w') as outfile:
                json.dump(output, outfile, indent=4, sort_keys=True)


