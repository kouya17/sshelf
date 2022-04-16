import { IPart, Shelf } from './models'

export const demoParts: IPart[] = [
    {
        "id": 1,
        "name": "２．１ｍｍ標準ＤＣジャック　パネル取付用　２２１９６",
        "count": 10,
        "shelf_id": 1,
        "memo": "デモデータ",
        "created_at": "2019-10-04 15:25:07",
        "updated_at": "2019-10-04 15:25:07"
    },
    {
        "id": 2,
        "name": "２．１ｍｍ標準ＤＣプラグ　ＭＰ－１２１Ｍ",
        "count": 10,
        "shelf_id": 2,
        "memo": "デモデータ",
        "created_at": "2019-10-04 15:25:07",
        "updated_at": "2019-10-04 15:25:07"
    },
    {
        "id": 3,
        "name": "パネル用押しボタンスイッチ　モーメンタリ　丸型　緑",
        "count": 1,
        "shelf_id": 3,
        "memo": "モデモータ",
        "created_at": "2019-10-04 15:25:07",
        "updated_at": "2019-10-04 15:25:07"
    }
]

export const demoShelfs: Shelf[] = [
    {
        "id": 1,
        "name": "引き出し1",
        "port": 0,
        "memo": "デモデータ",
        "created_at": "2019-10-04 15:25:07"
    },
    {
        "id": 2,
        "name": "引き出し2",
        "port": 1,
        "memo": "デモデータ",
        "created_at": "2019-10-04 15:25:07"
    },
    {
        "id": 3,
        "name": "引き出し3",
        "port": 2,
        "memo": "でもデータ",
        "created_at": "2019-10-04 15:25:07"
    },
]

export function searchPart(name: string): IPart[] {
    return demoParts.filter(part => part.name.indexOf(name) != -1)
}