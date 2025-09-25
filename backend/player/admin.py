from django.contrib import admin
from .models import PlayerScore

@admin.register(PlayerScore)
class PlayerScoreAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'score', 'updated_at')
    ordering = ('-score', '-updated_at')

# Register your models here.
