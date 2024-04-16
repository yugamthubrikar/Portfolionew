import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const GET = async (request: Request) => {

    const result = await prisma.city.findMany()
    console.log(result)
    return new Response(JSON.stringify(result))
}

export const POST = async (request: Request) => {
    await prisma.city.create(
        {
            data: {
                Name: 'NAGPUR',
                CountryCode: 'IND',
                District:"MAHARASHTRA",
                Population: 128789
            }
        }
    )
    return new Response('done')
}