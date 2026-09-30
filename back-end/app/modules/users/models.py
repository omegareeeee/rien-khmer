from app.database.models_base import Base

from uuid import UUID, uuid4

from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy import String


class User(Base):
    __tablename__ = "users"

    id: mapped_column[uuid4] = mapped_column(
        primary_key=True,
        default=uuid4
    )

    username: Mapped[str] = mapped_column(
        String(16),
        unique = True,
        nullable= False
    )

    password_hashed: Mapped[str] = mapped_column(
        String(255),
        nullable=False
    )
