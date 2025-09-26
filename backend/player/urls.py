from django.urls import path
from .views import *


urlpatterns = [
    path('top/', top_scores_list, name='top-scores'),
    path('create/', create_score, name='create-score'),
    path('live/', live_update, name='live-update'),
    path('create/', create_player, name='create-player'),
    path('<int:pk>/update_score/', update_player_score, name='update-player-score'),
]