from rest_framework import serializers
from .models import Person, Membership, Group

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ['id', 'name']

class MembershipSerializer(serializers.ModelSerializer):
    person = serializers.PrimaryKeyRelatedField(queryset=Person.objects.all())

    class Meta:
        model = Membership
        fields = ['person', 'date_joined', 'invite_reason']

class GroupSerializer(serializers.ModelSerializer):
    members = MembershipSerializer(many=True)

    class Meta:
        model = Group
        fields = ['id', 'name', 'members']

    def create(self, validated_data):
        members_data = validated_data.pop('members')
        group = Group.objects.create(**validated_data)
        for member_data in members_data:
            Membership.objects.create(group=group, **member_data)
        return group
