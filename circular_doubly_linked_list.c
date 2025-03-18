#include <stdio.h>
#include <stdlib.h>

struct node {
    int data;
    struct node *prev;
    struct node *next;
};

struct node *head = NULL, *tail = NULL;

// Function to calculate the length of the circular linked list
int length() {
    if (head == NULL) return 0;

    struct node *temp = head;
    int count = 0;

    do {
        count++;
        temp = temp->next;
    } while (temp != head);

    return count;
}

// Insert at the beginning
void Begin(int a) {
    struct node *new = (struct node*)malloc(sizeof(struct node));
    new->data = a;

    if (head == NULL) { 
        new->next = new->prev = new;
        head = tail = new;
    } else {
        new->next = head;
        new->prev = tail;
        tail->next = new;
        head->prev = new;
        head = new;
    }
}

// Insert at the end
void End(int a) {
    struct node *new = (struct node*)malloc(sizeof(struct node));
    new->data = a;

    if (head == NULL) {
        new->next = new->prev = new;
        head = tail = new;
    } else {
        new->next = head;
        new->prev = tail;
        tail->next = new;
        head->prev = new;
        tail = new;
    }
}

// Insert in the middle
void Middle(int a) {
    struct node *temp;
    int loc, i = 1, len = length();

    if (len == 0) {
        printf("The list is empty, inserting at the beginning.\n");
        Begin(a);
        return;
    }

    printf("Enter the location to insert: ");
    scanf("%d", &loc);

    if (loc < 1 || loc > len + 1) {
        printf("Invalid location\n");
        return;
    }

    if (loc == 1) {
        Begin(a);
        return;
    }
    if (loc == len + 1) {
        End(a);
        return;
    }

    temp = head;
    for (i = 1; i < loc - 1; i++) 
        temp = temp->next;

    struct node *new = (struct node*)malloc(sizeof(struct node));
    new->data = a;

    new->next = temp->next;
    new->prev = temp;

    temp->next->prev = new;
    temp->next = new;
}

// Search for an element
void Search(int key) {
    if (head == NULL) {
        printf("The list is empty.\n");
        return;
    }

    struct node *temp = head;
    int pos = 1;
    int found = 0;

    do {
        if (temp->data == key) {
            printf("Element %d found at position %d\n", key, pos);
            found = 1;
            break;
        }
        temp = temp->next;
        pos++;
    } while (temp != head);

    if (!found) {
        printf("Element %d not found.\n", key);
    }
}

// Delete from the beginning
void DBegin() {
    if (head == NULL) {
        printf("The list is empty.\n");
        return;
    }

    struct node *temp = head;

    if (head == tail) {
        free(head);
        head = tail = NULL;
    } else {
        head = head->next;
        tail->next = head;
        head->prev = tail;
        free(temp);
    }
}

// Delete from the middle
void DMid() {
    int loc, i = 1, len = length();

    if (len == 0) {
        printf("The list is empty.\n");
        return;
    }

    printf("Enter the position to delete: ");
    scanf("%d", &loc);

    if (loc < 1 || loc > len) {
        printf("Invalid location.\n");
        return;
    }

    if (loc == 1) {
        DBegin();
        return;
    }
    if (loc == len) {
        DEnd();
        return;
    }

    struct node *temp = head;
    for (i = 1; i < loc; i++) 
        temp = temp->next;

    temp->prev->next = temp->next;
    temp->next->prev = temp->prev;
    free(temp);
}

// Delete from the end
void DEnd() {
    if (head == NULL) {
        printf("The list is empty.\n");
        return;
    }

    if (head == tail) {
        free(head);
        head = tail = NULL;
        return;
    }

    struct node *temp = tail;

    tail = tail->prev;
    tail->next = head;
    head->prev = tail;

    free(temp);
}

// Display the linked list
void Display() {
    if (head == NULL) {
        printf("The list is empty.\n");
        return;
    }

    struct node *temp = head;
    do {
        printf("%d <-> ", temp->data);
        temp = temp->next;
    } while (temp != head);
    printf("(Head)\n");

    printf("Total Elements: %d\n", length());
}

// Main function
int main() {
    int a, ch;

    while (1) {
        printf("\n1. Insert Beginning\n");
        printf("2. Insert Middle\n");
        printf("3. Insert End\n");
        printf("4. Display\n");
        printf("5. Search\n");
        printf("6. Delete Beginning\n");
        printf("7. Delete Middle\n");
        printf("8. Delete End\n");
        printf("9. Exit\n");
        printf("Enter choice: ");
        scanf("%d", &ch);

        switch (ch) {
            case 1:
                printf("Enter element: ");
                scanf("%d", &a);
                Begin(a);
                break;
            case 2:
                printf("Enter element: ");
                scanf("%d", &a);
                Middle(a);
                break;
            case 3:
                printf("Enter element: ");
                scanf("%d", &a);
                End(a);
                break;
            case 4:
                Display();
                break;
            case 5:
                printf("Enter element to search: ");
                scanf("%d", &a);
                Search(a);
                break;
            case 6:
                DBegin();
                break;
            case 7:
                DMid();
                break;
            case 8:
                DEnd();
                break;
            case 9:
                printf("Exiting...\n");
                return 0;
            default:
                printf("Enter a valid choice!\n");
        }
    }
}
