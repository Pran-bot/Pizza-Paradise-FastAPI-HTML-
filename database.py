from sqlalchemy import create_engine
from sqlalchemy.orm import declarative_base,sessionmaker


# database url

Base=declarative_base()

Session=sessionmaker()