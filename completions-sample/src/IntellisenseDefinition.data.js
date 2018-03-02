/*  
   Visual Studio Code Extension - Planning Syntax Language
   Torres Frederic 2018
   - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
   Visual Studio Code Intellisense Definition for Planning Syntax (*.pln).
 */
//import { getTeam, getStatus } from './IntellisenseDefinitionFunc';
let funcs = require('./IntellisenseDefinition.func.js');

const INSERTED_REPLACE_TAG = "${1||}";

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
        Name: "Story",
        Inserted: `Story: Title
    Description: As a user...
    LastModified: [LastModified]
    Point: 
    Status: New
    Acceptance Criteria:
        Scenario: User submits feedback form with the valid data
            Given ...
            When ...
            Then ...
    `
    },
    {
        Name: "GetSample",
        Inserted: funcs.getSample()
    },
    {
        Name: "Status",
        Inserted: INSERTED_REPLACE_TAG,
        Values: funcs.getStatus(),
    },
    {
        Name: "Point",
        Inserted: INSERTED_REPLACE_TAG,
        Values: funcs.getPoint(),
    },
    {
        Name: "Team",
        Inserted: INSERTED_REPLACE_TAG,
        Values: funcs.getTeam(),
    },
    {
        Name: "Developer",
        Inserted: INSERTED_REPLACE_TAG,
        Values: funcs.getDeveloper(),
    },
    {
        Name: "Tester",
        Inserted: INSERTED_REPLACE_TAG,
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
        Inserted: INSERTED_REPLACE_TAG,
        Values: ["#Now"],
    },
    {
        Name: "Date",
        Inserted: INSERTED_REPLACE_TAG,
        Values: ["#16DayList"],
    }
];