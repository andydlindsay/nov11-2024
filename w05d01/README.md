# W05D02 - Database Design

### To Do
- [x] Primary Keys/Foreign Keys
- [x] Naming Conventions
- [x] Data Types
- [x] Relationship Types
- [x] Design Concepts
- [x] Entity Relationship Diagrams
- [x] Activity: Convert 2 Spreadsheets
- [x] Student Suggestion ERD(s)

### Primary Key/Foreign Key
* PK is used to uniquely identify one record in a table
* can be any data type
* auto-incrementing integers
* a FK is a PK stored in another table
* the FK has to be the same data type as the PK
* serial => integer

### Naming Conventions
* all PK should be called `id`
* all FK should be called the PK's table singular plus `_id` `user_id` `map_id`
* all tables should be snake_case and plural

### Data Types
* each field has to have an assigned data type
* can always be changed with an alter table statement

### Relationship Types
* one-to-one => 1 record in table A is related to only one record in table B
* one-to-many => 1 record in table A is related to one or more records in table B
* many-to-many => one or more records in table A are related to one or more records in table B
( require a third table: bridge, join, junction )

### Design Considerations
* make fields required based on initial values
* intelligent default values
* don't use calculated fields (PLEASE) first_name last_name
* pull repeating values out to a look up table (another table)
* try not to delete anything "soft delete" is_active FALSE

### Entity Relationship Diagram (ERD)
* shows the tables, the fields, the relationships between the tables



SELECT *
FROM bands a
JOIN bands b




