from pydantic import BaseModel, Field
from uuid import UUID, uuid4

class UserCreate(BaseModel):
    username: str =Field(min_length=3, max_length=16)
    password: str = Field(min_length=3, max_length=16)

class User(BaseModel):
    """Response Schema for User"""
    id: UUID
    username: str

    model_config = {"from_attributes": True}