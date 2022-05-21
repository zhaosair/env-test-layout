export default {
  'GET /api/crud/fieldModel/fieldModels': {
    "code": 200, 
    "data": {
        "current": "1", 
        "hitCount": false, 
        "optimizeCountSql": true, 
        "orders": [ ], 
        "pages": "3", 
        "records": [
            {
                "comments": "", 
                "defaultFieldName": "name", 
                "defaultValue": null, 
                "fieldFloatLength": null, 
                "fieldLength": 50, 
                "fieldType": "varchar", 
                "id": "1", 
                "isNotNull": 1, 
                "isUnique": 1, 
                "modelLabel": "名称", 
                "modelName": "NAME", 
                "optionalFieldName": null
            }, 
            {
                "comments": "", 
                "defaultFieldName": "title", 
                "defaultValue": null, 
                "fieldFloatLength": null, 
                "fieldLength": 100, 
                "fieldType": "varchar", 
                "id": "2", 
                "isNotNull": 1, 
                "isUnique": 0, 
                "modelLabel": "标题", 
                "modelName": "TITLE", 
                "optionalFieldName": null
            }, 
            {
                "comments": null, 
                "defaultFieldName": "uuid", 
                "defaultValue": null, 
                "fieldFloatLength": null, 
                "fieldLength": 36, 
                "fieldType": "varchar", 
                "id": "3", 
                "isNotNull": 0, 
                "isUnique": 0, 
                "modelLabel": "GUID", 
                "modelName": "UUID", 
                "optionalFieldName": null
            }, 
            {
                "comments": null, 
                "defaultFieldName": null, 
                "defaultValue": null, 
                "fieldFloatLength": null, 
                "fieldLength": null, 
                "fieldType": "datetime", 
                "id": "7", 
                "isNotNull": 0, 
                "isUnique": 0, 
                "modelLabel": "时间", 
                "modelName": "TIME", 
                "optionalFieldName": null
            }, 
            {
                "comments": null, 
                "defaultFieldName": null, 
                "defaultValue": null, 
                "fieldFloatLength": null, 
                "fieldLength": null, 
                "fieldType": "date", 
                "id": "8", 
                "isNotNull": 0, 
                "isUnique": 0, 
                "modelLabel": "日期", 
                "modelName": "DATE", 
                "optionalFieldName": null
            }, 
            {
                "comments": null, 
                "defaultFieldName": "type", 
                "defaultValue": null, 
                "fieldFloatLength": null, 
                "fieldLength": null, 
                "fieldType": "smallint", 
                "id": "9", 
                "isNotNull": 0, 
                "isUnique": 0, 
                "modelLabel": "类型", 
                "modelName": "TYPE", 
                "optionalFieldName": null
            }, 
            {
                "comments": null, 
                "defaultFieldName": "price", 
                "defaultValue": null, 
                "fieldFloatLength": 2, 
                "fieldLength": 8, 
                "fieldType": "decimal", 
                "id": "10", 
                "isNotNull": 0, 
                "isUnique": 0, 
                "modelLabel": "价格", 
                "modelName": "PRICE", 
                "optionalFieldName": null
            }, 
            {
                "comments": null, 
                "defaultFieldName": "amount", 
                "defaultValue": null, 
                "fieldFloatLength": null, 
                "fieldLength": null, 
                "fieldType": "int", 
                "id": "11", 
                "isNotNull": 0, 
                "isUnique": 0, 
                "modelLabel": "数量", 
                "modelName": "COUNT", 
                "optionalFieldName": "count"
            }, 
            {
                "comments": null, 
                "defaultFieldName": null, 
                "defaultValue": null, 
                "fieldFloatLength": null, 
                "fieldLength": 20, 
                "fieldType": "bigint", 
                "id": "15", 
                "isNotNull": 0, 
                "isUnique": 0, 
                "modelLabel": "外键", 
                "modelName": "KEY", 
                "optionalFieldName": null
            }, 
            {
                "comments": null, 
                "defaultFieldName": null, 
                "defaultValue": null, 
                "fieldFloatLength": null, 
                "fieldLength": 11, 
                "fieldType": "int", 
                "id": "17", 
                "isNotNull": 0, 
                "isUnique": 0, 
                "modelLabel": "数值", 
                "modelName": "NUMBER", 
                "optionalFieldName": null
            }
        ], 
        "searchCount": true, 
        "size": "10", 
        "total": "30"
    }, 
    "message": "Success"
}
}
