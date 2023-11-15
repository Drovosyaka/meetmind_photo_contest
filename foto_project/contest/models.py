from django.db import models
from users.models import CustomUser


class Category(models.Model):
    id = models.AutoField(primary_key=True)
    image = models.ImageField(upload_to='uploads/categories/', null=True)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Номинацию'
        verbose_name_plural = 'Номинации'

class Photo(models.Model):
    id = models.AutoField(primary_key=True)
    photo_category = models.ForeignKey(Category, on_delete=models.PROTECT, verbose_name='Номинация')
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE, verbose_name='Автор работы')
    image = models.ImageField(upload_to='uploads/photos/', verbose_name='Изображение')
    copyright = models.BooleanField(verbose_name='Вы являетесь правообладателем?')
    vk_link = models.URLField(blank=True, null=True, verbose_name='Ссылка на публикацию VK')
    name_work = models.CharField(blank=True, max_length=100, verbose_name='Название работы')
    description = models.TextField(blank=True, null=True, verbose_name='Описание работы')
    photo_place = models.CharField(max_length=200, blank=True, null=True, verbose_name='Место съемки')
    processing = models.BooleanField(verbose_name='Подвергалось ли фото обработке?')
    model_release = models.CharField(blank=True, null=True, max_length=150, verbose_name='Модельный релиз')
    additional_info = models.TextField(blank=True, null=True, verbose_name='Дополнительная информация')
    vote_count = models.IntegerField(default=0, editable=False, verbose_name='Проголосовавших')
    is_approved = models.BooleanField(default=False, verbose_name='Прошло модерацию')


    def increase_vote_count(self):
        self.vote_count += 1
        self.save()

    def __str__(self):
        return self.name_work

    class Meta:
        verbose_name = 'Работу'
        verbose_name_plural = 'Работы'


class Vote(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    photo = models.ForeignKey(Photo, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Голос'
        verbose_name_plural = 'Голоса'
