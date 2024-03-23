n = int(input())

marks = {}

for _ in range(n):
    line = input().split()
    name = line[0]
    scores = list(map(float, line[1:]))
    marks[name] = scores

student_name = input()
student_scores = marks[student_name]
av_score = sum(student_scores) / len(student_scores)

print("{:.2f}".format(av_score))
