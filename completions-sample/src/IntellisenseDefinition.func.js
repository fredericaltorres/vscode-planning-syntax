/*  
   Visual Studio Code Extension - Planning Syntax Language
   Torres Frederic 2018
   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
   Visual Studio Code Intellisense Definition for Planning Syntax (*.pln).
   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
   Function evaluate at start time
 */

function getPoint() {
    return [
        1, 2, 3, 5, 8, 13, 21
    ];
}
function getDeveloper() {
    return [
        "Paul M", "John L", "George H", "Richard S", "Toni Visconti", "David B"
    ];
}
function getTester() {
    return [
        "Mike J", "Charlie W", "Bill W", "Ron W", "Keith R", "Mick Ronson", "Lou R"
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
function getSample() {
    return `# Comment
No Sample Defined    
`;
}
module.exports = {
    getTeam,
    getStatus,
    getDeveloper,
    getTester,
    getSample,
    getPoint,
};
