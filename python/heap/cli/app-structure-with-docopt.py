"""
project structure example:

    D bo-robot-cli
        D commands
            __init__.py
            base.py
            mkbp.py
            bp.py
        F robot.py
"""


# *****************************************************************************
# robot.py
# *****************************************************************************
"""
 Usage:
    robot.py mkbp [DATA_FILE]
    robot.py rmbp [MATCH]
    robot.py listbp
    robot.py bp [ID]
"""
from docopt import docopt
from inspect import getmembers, isclass

def _find_command(opts):
    import commands
    for k in opts.keys():
        if hasattr(commands, k) and opts[k]:
            command_module = getattr(commands, k)
            commands = getmembers(command_module, isclass)
            command = [command[1] for command in commands if command[0] != 'Base'][0]
            return command(opts)
    raise 'not implemented command'

def main(opts):
    command = _find_command(opts)
    command.run()

if __name__ == '__main__':
    arguments = docopt(__doc__)
    main(arguments)

# *****************************************************************************
# commands/__init__.py
# *****************************************************************************
from .mkbp import *
from .bp import *

# *****************************************************************************
# commands/base.py
# *****************************************************************************
class Base(object):
    """A base command."""

    def __init__(self, options, *args, **kwargs):
        self.options = options
        self.args = args
        self.kwargs = kwargs

    def run(self):
        raise NotImplementedError('You must implement the run() method yourself!')
# *****************************************************************************
# commands/mkpb.py
# *****************************************************************************
from .base import Base

class Mkbp(Base):

    def run(self):
        print('mkbp from Mkpb.run method')
