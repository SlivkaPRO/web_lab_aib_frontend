import heapq
from collections import deque

def input_data():
    try:
        with open("input2.txt", "r") as file:
            n, arr = int(file.readline()), list(map(int, file.readline().split()))
    except FileNotFoundError:
        print("Файл input.txt не найден.")
        n, arr = int(input()), list(map(int, input().split()))
    return n, arr

def update_heaps(max_heap, min_heap, element):
    heapq.heappush(max_heap, -element)
    heapq.heappush(min_heap, -heapq.heappop(max_heap))
    
    if len(min_heap) > len(max_heap):
        heapq.heappush(max_heap, -heapq.heappop(min_heap))

def median_sum(n, arr):
    max_heap, min_heap, result_sum = [], [], 0

    for i in range(n):
        update_heaps(max_heap, min_heap, arr[i])
        result_sum -= max_heap[0]

    return result_sum

if __name__ == "__main__":
    n, arr = input_data()
    print(median_sum(n, arr))
