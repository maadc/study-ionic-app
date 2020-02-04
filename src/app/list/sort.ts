export class Sort {

    static sortABC(array) {
        return array.sort((a, b) => {
            var nameA = a.Name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.Name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })
    }

    static sortCBA(array) {
        return array.sort((a, b) => {
            var nameA = a.Name.toUpperCase(); // ignore upper and lowercase
            var nameB = b.Name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return 1;
            }
            if (nameA > nameB) {
                return -1;
            }
            return 0;
        })
    }

    static sortHALLE(array) {
        return array.sort((a, b) => {
            var halleA = a.Halle.toUpperCase(); // ignore upper and lowercase
            var halleB = b.Halle.toUpperCase(); // ignore upper and lowercase
            if (halleA < halleB) {
                return -1;
            }
            if (halleA > halleB) {
                return 1;
            }
            return 0;
        })
    }

    static sortELLAH(array) {
        return array.sort((a, b) => {
            var halleA = a.Halle.toUpperCase(); // ignore upper and lowercase
            var halleB = b.Halle.toUpperCase(); // ignore upper and lowercase
            if (halleA < halleB) {
                return 1;
            }
            if (halleA > halleB) {
                return -1;
            }
            return 0;
        })
    }

}