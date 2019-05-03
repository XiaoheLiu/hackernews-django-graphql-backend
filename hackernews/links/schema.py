import graphene
from graphene_django import DjangoObjectType

from .models import Link


class LinkType(DjangoObjectType):
    class Meta:
        model = Link


class Query(graphene.ObjectType):
    links = graphene.List(LinkType)
    link = graphene.Field(LinkType, id=graphene.Int())

    def resolve_links(self, info, **kwargs):
        return Link.objects.all()

    def resolve_link(self, info, **kwargs):
        id = kwargs.get('id')

        if id is not None:
            return Link.objects.get(pk=id)
        return None


class CreateLink(graphene.Mutation):
    id = graphene.Int()
    url = graphene.String()
    description = graphene.String()

    class Arguments:
        url = graphene.String()
        description = graphene.String()

    def mutate(self, info, url, description):
        link = Link(url=url, description=description)
        link.save()

        return CreateLink(
            id=link.id,
            url=link.url,
            description=link.description,
        )


class Mutation(graphene.ObjectType):
    create_link = CreateLink.Field()
