from fastapi import FastAPI, Path
from typing import Optional
from pydantic import BaseModel

app = FastAPI()

# students = {
#     1: {
#         "name" : "john",
#         "age" : 17,
#         "year" : "3",
#     }
# }

todos = {}

class Todo(BaseModel):
    id: int
    title: str
    completed: bool

class UpdateTodo(BaseModel):
    id: Optional[int] = None
    title: Optional[str] = None
    completed: Optional[bool] = None


# # Example of adding a student object locally
# student_1 = Student(name="John", age=17, year="Year 12")
# students[1] = student_1



@app.get("/")
def index():
    return {"message": "Welcome to a classroom example of FastAPI!"}


# Path parameter (decorator parameter + function parameter)
@app.get("/todos")
async def get_all_todo():
    if not todos:
        return {"Error. No Todos"}
    return todos



@app.get("/todos/{id}")
async def get_todo(id: int):
    for todos_id in todos:
        if id == todos_id:
            return (todos_id)
    return ("Error not found.")

@app.post("/todo/post")
async def add_todo(id:int,title:str):
    todos.append(id,title,False)
    
@app.delete("todo/delete")
async def delete_all_todo():
    todos.clear()

@app.delete("todo/delete/{id}")
async def delete_todo(id:int):
    for todos_id in todos:
        if id == todos_id:
            todos.remove(todos_id)
    return ("Error not found.")

@app.update("todo/update/{id}")
async def update_todo(id:int, new_id:int,new_title:str,new_completed:bool):
    for todos_id in todos:
        if id == todos_id:
            todos[todos.id] = (new_id, new_title, new_completed)
            return {"message": f"Todo with ID {id} updated successfully."}
    return ("Error not found")
    