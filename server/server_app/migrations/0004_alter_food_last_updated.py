# Generated by Django 4.2.5 on 2023-09-14 06:32

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('server_app', '0003_remove_food_original_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='food',
            name='last_updated',
            field=models.DateTimeField(default=datetime.datetime(2023, 9, 14, 6, 32, 6, 56126, tzinfo=datetime.timezone.utc), help_text='登録日'),
        ),
    ]