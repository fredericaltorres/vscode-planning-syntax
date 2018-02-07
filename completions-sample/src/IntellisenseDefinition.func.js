/*  
   Visual Studio Code Extension - Planning Syntax Language
   Torres Frederic 2018
   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
   Visual Studio Code Intellisense Definition for Planning Syntax (*.pln).
   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
   Function evaluate at start time
 */

function getDeveloper() {
    return [
        "Paul", "John", "George", "Richard"
    ];
}
function getTester() {
    return [
        "Mike", "Charlie", "Bill", "Ron", "Keith"
    ];
}
function getTeam() {
    return [
        'Blue Team', 'Red Team', 'Yellow Team'
    ];
}
function getStatus() {
    return [
        'New', 'InProgress', 'Blocked', 'ReadyForQA', 'Done'
    ];
}
module.exports = {
    getTeam,
    getStatus,
    getDeveloper,
    getTester,
};
