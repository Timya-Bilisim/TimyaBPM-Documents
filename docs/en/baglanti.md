# Steps to Establish a Connection

- _Connections are used to facilitate data exchange._

![Figure 2](/TimyaBPM-Documents/baglantii1.png)

## Connection Properties

- **Connection Name**: The name of the connection in the system.
- **Connection String**: Contains the information required to connect to the database. It defines the credentials used to access the data source and other settings like the server address.

**Example of a Connection String**

**Example**

```json
Server=myServerAddress; Database=myDataBase; User Id=myUsername; Password=myPassword;

```
 ■ **Server=myServerAddress**: Specifies the address of the server to connect to.  
■ **Database=myDataBase**: Indicates the name of the database to access.  
■ **User Id=myUsername**: The username used to log in to the database.  
■ **Password=myPassword**: The password for the user's access.

- **Login Address**: The IP address or domain name of the LDAP server. This field is used when the **ActiveDirectorySync** connection type is selected.
- **Username**: The username with access to the LDAP server. This field is used when the **ActiveDirectorySync** connection type is selected.
- **LDAP Filter**: LDAP filters allow synchronization of only the necessary information based on specific criteria in the data. This field is used when the **ActiveDirectorySync** connection type is selected.
- **Secure Socket**: Options indicating whether the connection is secure. This field is used when the **ActiveDirectorySync** connection type is selected.
   - **None**: No encryption, data is transmitted as plain text.
   - **Secure Sockets Layer**: Data is encrypted via SSL (Secure Sockets Layer), providing a more secure connection.
- **Connection Type**:
  - **Database**: Connects to SQL or other databases to manage data.
  - **ActiveDirectorySync**: Performs synchronization operations with Active Directory using the LDAP protocol.

## Connection Type: Example Usage Scenarios

_Examples below demonstrate how different connection types can be configured._

#### Database Connection
- **Connection Name**: Veritabanı_Baglanti
- **Connection String**: `Server=myServerAddress; Database=myDataBase; User Id=myUsername; Password=myPassword;`

#### Active Directory Connection
- **Connection Name**: ADL_AD
- **Login Address**: LDAP://452.188.1.5
- **Username**: bpm
- **Password**: ********
- **Connection Type**: ActiveDirectorySync
- **LDAP Filter**: (mail=ali@example.com)

_➜ After defining the connections, use the test button to verify that the connection is working properly._