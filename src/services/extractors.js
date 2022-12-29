class Extractors {

    static extractDataToSelectFormat(data, idKey, textKey) {
        let optData = new Array();
        data.forEach((o) => {
            optData = optData.concat({
                id: o[idKey],
                text: o[textKey]
            });
        });
        return optData;
    }
}

export default Extractors;