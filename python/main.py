#main.py
from algorithms.first_fit import first_fit
from algorithms.first_fit_decreasing import first_fit_decreasing
from algorithms.best_fit import best_fit
from algorithms.best_fit_decreasing import best_fit_decreasing
from algorithms.worst_fit import worst_fit
from algorithms.worst_fit_decreasing import worst_fit_decreasing
from algorithms.next_fit import next_fit

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

# Example usage
available_stock = ["1@4.8", "1@2.7"]
required_cuts = ["1@2.7", "2@1.8"]

cut_list, total_waste, stock_used = calculate_cut_list(available_stock, required_cuts)

print("Cut List:")
for cut in cut_list:
    print(cut)
print(f"\nTotal waste: {total_waste:.2f}m")
print(f"Total stock pieces used: {stock_used}")