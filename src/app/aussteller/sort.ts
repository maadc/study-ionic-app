export class Sort {

    static sortABC(array) {
        return array.sort((a, b) => {
            const nameA = a.Name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.Name.toUpperCase(); // ignore upper and lowercase
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
    }

    static sortCBA(array) {
        return array.sort((a, b) => {
            const nameA = a.Name.toUpperCase();
            const nameB = b.Name.toUpperCase();
            if (nameA < nameB) {
                return 1;
            }
            if (nameA > nameB) {
                return -1;
            }
            return 0;
        });
    }

    static sortHALLE(array) {
        return array.sort((a, b) => {
            const halleA = a.Halle.toUpperCase();
            const halleB = b.Halle.toUpperCase();
            if (halleA < halleB) {
                return -1;
            }
            if (halleA > halleB) {
                return 1;
            }
            return 0;
        });
    }

    static sortELLAH(array) {
        return array.sort((a, b) => {
            const halleA = a.Halle.toUpperCase();
            const halleB = b.Halle.toUpperCase();
            if (halleA < halleB) {
                return 1;
            }
            if (halleA > halleB) {
                return -1;
            }
            return 0;
        });
    }
}
