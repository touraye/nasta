import fs from "fs/promises"

export async function getLessons(){
    const rawFileContent = await fs.readFile( 'lessons.json', { encoding: 'utf-8' } )
    const data = JSON.parse( rawFileContent )
    
    return data.lessons ?? []
}

export function storeLesson( lessons ) {
    return fs.writeFile('lessons.js', JSON.stringify({lessons: lessons || []}))
}