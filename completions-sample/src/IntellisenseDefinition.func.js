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
        "Paul M", "John L", "George H", "Richard S", "Toni Visconti"
    ];
}
function getTester() {
    return [
        "Mike J", "Charlie W", "Bill W", "Ron W", "Keith R", "Mick Ronson"
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
