import re
import subprocess

class StayziaInterpreter:
    def __init__(self):
        self.variables = {}

    def run(self, code):
        lines = code.split('\n')
        for line in lines:
            self.interpret_line(line.strip())

    def interpret_line(self, line):
        if line.startswith('@HFGC'):
            self.hfgc_manage_resources()
        elif line.startswith('@pressurized'):
            self.execute_pressurized_task()
        elif 'CACHED' in line:
            self.cached_assign(line)
        elif '@OTF' in line:
            self.debug_cycle()
        # Add other functions here for interpretation

    def hfgc_manage_resources(self):
        print("Managing resources with HFGC...")

    def execute_pressurized_task(self):
        print("Executing task under pressure...")

    def cached_assign(self, line):
        match = re.match(r"CACHED assign immutable value \[ x: (\d+), y: (\d+) \]", line)
        if match:
            x, y = match.groups()
            self.variables['CachedValue'] = (int(x), int(y))
            print(f"Caching immutable values: {x}, {y}")

    def debug_cycle(self):
        print("Running on-the-fly proofing for debugging...")

# Example of Stayzia Code
stayzia_code = """
@HFGC
craft manage resources [ ]
    isolate resources from unused [ ]
    clean unused [ ]
    return success
endfn

@pressurized
fn. execute critical task [ task: Task ] Result
    proceed with task under high load [ task ]
    return Result
endfn

CACHED assign immutable value [ x: 42, y: 84 ] CachedValue
"""

# Instantiate the interpreter and run the code
interpreter = StayziaInterpreter()
interpreter.run(stayzia_code)
