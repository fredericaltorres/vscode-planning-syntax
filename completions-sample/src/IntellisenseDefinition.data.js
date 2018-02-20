/*  
   Visual Studio Code Extension - Planning Syntax Language
   Torres Frederic 2018
   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
   Visual Studio Code Intellisense Definition for Planning Syntax (*.pln).
 */
//import { getTeam, getStatus } from './IntellisenseDefinitionFunc';
let funcs = require('./IntellisenseDefinition.func.js');

module.exports = [
    {
        Name: "Backlog",
        Inserted: `Backlog:
    Team: 
    LastModified: [LastModified]
    Stories: 
        Story: As a user...
            Task: Description...
                Status: `
    },
    {
        Name: "Epic",
        Inserted: `Epic: As a user...
    Stories: 
        Story: As a user...
            LastModified: [LastModified]
            Status: `
    },
    {
        Name: "Sprint",
        Inserted: `Sprint:
    StartDate: [LastModified]
    EndDate: [LastModified]
    Team: `
    },
    {
        Name: "_Story",
        Inserted: `Story: As a user...
    LastModified: [LastModified]        
    Status: New `
    },
    {
        Name: "GetSample",
        Inserted: funcs.getSample()
    },
    {
        Name: "Status",
        Inserted: "${1||}",
        Values: funcs.getStatus(),
    },
    {
        Name: "Team",
        Inserted: "${1||}",
        Values: funcs.getTeam(),
    },
    {
        Name: "Developer",
        Inserted: "${1||}",
        Values: funcs.getDeveloper(),
    },
    {
        Name: "Tester",
        Inserted: "${1||}",
        Values: funcs.getTester(),
    },
    {
        Name: "Task",
        Inserted: `Task: Description...
    LastModified: [LastModified]
    Status: New
    Developer:
    Tester: `
    },
    {
        Name: "Now",
        Inserted: "${1||}",
        Values: ["#Now"],
    },
    {
        Name: "Date",
        Inserted: "${1||}",
        Values: ["#16DayList"],
    }
];