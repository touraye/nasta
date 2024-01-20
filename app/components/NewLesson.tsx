export function NewLesson() {
    return (
        <form method="post">
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" placeholder="Enter lesson name" />
            </div>

            <div>
                <label htmlFor="name">Content:</label>
                <input type="text" placeholder="Enter lesson content" />
            </div>

            <button>Create</button>
        </form>
    )
}