# Adding Business Objects

Business objects provide database connections. For example, to add a department to a form, you can follow these steps:

## Adding a Department

1. **Admin Menu:**
   - Go to the **Settings** section from the Admin menu.
   - Then navigate to the **Department** section.
   - Click the **New** button to add the required departments.

   ![Figure 1](/TimyaBPM-Documents/iş1.png)

2. **Database Connection:**
   - To add a department to the form, go to the **Department** table in the database.
   - Add the following code to the query text section in the business objects to establish the database connection:
     ```sql
     SELECT TOP (1000) [DepartmentId], [DepartmentName]
     FROM [Departments]
     ```

   ![Figure 2](/TimyaBPM-Documents/iş2.png)

3. **Adding to the Form:**
   - Go to the form and add the **Department** section.
   - Instead of manual entry, click **Data Source** to fetch information from the database.
   - Select the added section from the business objects.

   ![Figure 3](/TimyaBPM-Documents/iş3.png)
   ![Figure 4](/TimyaBPM-Documents/iş4.png)
