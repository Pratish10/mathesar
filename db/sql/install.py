import os
from db.connection import load_file_with_engine

FILE_DIR = os.path.abspath(os.path.dirname(__file__))
MSAR_SQL = os.path.join(FILE_DIR, '0_msar.sql')
MSAR_AGGREGATE_SQL = os.path.join(FILE_DIR, '3_msar_custom_aggregates.sql')


def install(engine):
    """Install SQL pieces using the given engine."""
    with open(MSAR_SQL) as file_handle:
        load_file_with_engine(engine, file_handle)
    with open(MSAR_AGGREGATE_SQL) as custom_aggregates:
        load_file_with_engine(engine, custom_aggregates)
