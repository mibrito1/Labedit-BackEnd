import { UserDb, userRole } from "../../src/models/Users";
import { BaseDatabase } from "../../src/dataBase/BaseDataBase"

const mockUsers: UserDb[] = [{
    id: "id-mock-user",
    name: "fulano",
    email: "user1@email.com",
    password: "user-hash-mock",
    role: userRole.Normal,
    created_at: new Date().toISOString()
},
{
    id: "id-mock-admim",
    name: "maria",
    email: "user2@email.com",
    password: "admim-hash-mock",
    role: userRole.Admin,
    created_at: new Date().toISOString()
}]
export class UserDataBaseMock extends BaseDatabase {
    public async signup(
        user: UserDb
    ) {
        return
    }
    public async getUserByEmail(email: string): Promise<UserDb> {
        const [response] = mockUsers.filter(user => user.email === email)
        return response
    }
}

