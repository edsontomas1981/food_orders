# Generated by Django 4.2.5 on 2023-10-31 16:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('produtos', '0005_contato'),
    ]

    operations = [
        migrations.RenameField(
            model_name='produto',
            old_name='fornecedor',
            new_name='fornecedor_cnpj',
        ),
        migrations.AddField(
            model_name='produto',
            name='alergenos',
            field=models.ManyToManyField(to='produtos.alergenos'),
        ),
        migrations.AddField(
            model_name='produto',
            name='tamanho',
            field=models.ManyToManyField(to='produtos.tamanho'),
        ),
    ]
