/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var i, count=0, frstSpchnee, scndSpchnee, lstSpchnee;
    var checks = preferences;

    for (i=0; i<preferences.length; i++){
        frstSpchnee = i+1;
        scndSpchnee = preferences[i];
        lstSpchnee = preferences[scndSpchnee-1]

        if (checks[frstSpchnee-1]!=undefined || checks[scndSpchnee-1]!=undefined || checks[lstSpchnee-1]!=undefined) {

            if(preferences[lstSpchnee-1]===frstSpchnee && frstSpchnee!=scndSpchnee) {
                count++;
                checks[frstSpchnee - 1] = undefined;
                checks[scndSpchnee - 1] = undefined;
                checks[lstSpchnee - 1] = undefined;
            }
        }
    }
    return count;
};

