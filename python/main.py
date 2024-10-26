from py_algorithms.first_fit import first_fit
from py_algorithms.first_fit_decreasing import first_fit_decreasing
from py_algorithms.best_fit import best_fit
from py_algorithms.best_fit_decreasing import best_fit_decreasing
from py_algorithms.worst_fit import worst_fit
from py_algorithms.worst_fit_decreasing import worst_fit_decreasing
from py_algorithms.next_fit import next_fit

def calculate_cut_list(available, required):
    algorithms = [
        first_fit, first_fit_decreasing, best_fit, best_fit_decreasing,
        worst_fit, worst_fit_decreasing, next_fit
    ]
    results = []
    for algo in algorithms:
        try:
            result = algo(available, required)
            results.append(result)
        except ValueError as e:
            print(f"Algorithm {algo.__name__} failed: {e}")
    
    best_result = min(results, key=lambda res: res['waste'])
    return best_result['cut_list'], best_result['waste'], best_result['stock_used']
