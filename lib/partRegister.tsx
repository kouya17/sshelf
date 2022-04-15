import { PartRegisterInfo } from "./models"

export function convertPartsTextToPartInfoList(text: string): PartRegisterInfo[] {
    const parts = text.split(/\r\n|\n/)
    const partInfoList: PartRegisterInfo[] = []
    parts.forEach(part => {
        const splited = part.split("\t")
        const partInfo: PartRegisterInfo = {
            "code": splited[0],
            "name": splited[1].slice(0, splited[1].length/2),
            "count": parseInt(splited[2].replace(/[^0-9]/g, '')),
            "shelf_id": -1,
            "memo": ""
        }
        partInfoList.push(partInfo)
    })
    return partInfoList
}