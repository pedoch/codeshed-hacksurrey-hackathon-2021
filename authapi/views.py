

# from django.shortcuts import render
# import json
# from django.db import connection
# from django.http import HttpResponse

# raw_query = "SELECT * FROM stack"


# def points(request):
#     with connection.cursor() as cursor:
#         cursor.execute(raw_query)
#         data = dictfetchall(cursor)

#     stringfield_data = json.dumps(data)
#     return HttpResponse(stringfield_data, content_type="application/json")


# def dictfetchall(cursor):
#     columns = [col[0] for col in cursor.description]
#     return [
#         dict(zip(columns, row))
#         for row in cursor.fetchall()
#     ]



# Create your views here.
