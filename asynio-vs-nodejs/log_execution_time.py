import time

def log_execution_time(method):
    def timed(*args, **kw):
        ts = time.time()
        result = method(*args, **kw)
        te = time.time()
 
        print '%r (%r, %r) %2.2f sec' % (method.__name__, args, kw, te-ts)
        return result
 
    return timed
