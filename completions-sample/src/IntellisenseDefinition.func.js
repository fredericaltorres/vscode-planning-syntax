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
function getSample() {
    return `
    # Comment
    Sprint:
        StartDate: Feb 15, 2018, 10:47:36 PM
        EndDate: Feb 25, 2018, 10:47:36 PM
        Team: Blue Team
    
        Story: As a user I want to...
            LastModified: Feb 15, 2018, 10:47:42 PM
            Status: InProgress
            Task: Description...
                LastModified: Feb 15, 2018, 10:47:45 PM
                Status: InProgress
                Developer: Mick Ronson
                Tester: Toni Visconti
            Task: Description...
                LastModified: Feb 19, 2018, 05:54:17 PM
                Status: New
                Developer: Mick Ronson
                Tester: Toni Visconti
    
        Story: As a user I want to...
            LastModified: Feb 15, 2018, 10:47:42 PM
            Status: Blocked
            Task: Description...
                LastModified: Feb 15, 2018, 10:47:45 PM
                Status: InProgress
                Developer: Mick Ronson
                Tester: Toni Visconti    
    `;
}
module.exports = {
    getTeam,
    getStatus,
    getDeveloper,
    getTester,
    getSample,
};
