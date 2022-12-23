
import { getUsers, insertUser } from '../controllers';

const mockedJson = vi.fn(() => ({
    end: vi.fn
}))

describe("user tests", () => {

    beforeAll(async ()=>{
        await global.__db_knex('users').insert({ username: 'test-username' })
    })

    it('should return users', async () => {
        await getUsers({}, {
            json: mockedJson
        })
        expect(mockedJson).toBeCalledWith([
            {
                "bio": null,
                "id": 1,
                "username": "test-username",
            },
        ])
    })

    it('should insert user and return its id', async () => {
        await insertUser({
            body: {
                username: "new-username"
            }
        }, {
            json: mockedJson
        })
        expect(mockedJson).toBeCalledWith([{
            id: 2
        }])
    })

})