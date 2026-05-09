// import faker library
import{faker} from'@faker-js/faker';

export class RandomDataUtil
{
    static getFirstName():string
    {
        return faker.person.firstName();
    }

    static getLastName():string
    {
        
        return faker.person.lastName();
    }

    static getFullName():string
    {
        return faker.person.fullName();
    }

    static getEmail():string
    {
        return faker.internet.email();
    }

    static getPhoneNumber():string
    {
        return faker.phone.number();
    }

    static getPassword():string
    {
        return faker.internet.password();
    }

    static getRandomCountry():string
    {
        return faker.location.country();
    }

    static getRandomState():string
    {
        return faker.location.state();
    }
}