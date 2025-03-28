import os

from pydantic import SecretStr
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    BOT_TOKEN: SecretStr
    WEBAPP_URL: SecretStr
    DB_URL: SecretStr
    WEBHOOK_URL:SecretStr
    

    model_config = SettingsConfigDict(
        env_file=os.path.join(os.path.dirname(__file__),".env"),
        env_file_encoding="utf-8"
    )


config = Settings()
