# Generated by Django 4.2.5 on 2023-10-17 00:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('produtos', '0003_rename_fornecedores_fornecedor'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='fornecedor',
            name='contato_fk',
        ),
        migrations.DeleteModel(
            name='Contato',
        ),
    ]
