from importlib.metadata import version

__app_name__ = __name__.replace("_", "-")
__version__ = version(__app_name__)
