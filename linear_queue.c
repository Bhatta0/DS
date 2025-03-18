#include <stdio.h>
#include <stdlib.h>

int n;
int front = -1;
int rear = -1;

void enqueue(int queue[], int x) {
    if (rear == n - 1) {
        printf("Queue is overflow...\n");
    } else {
        if (front == -1) {
            front = 0;
        }
        rear++;
        queue[rear] = x;
        printf("Element %d enqueued into queue\n", x);
    }
}

void dequeue(int queue[]) {
    if (front == -1 || front > rear) {
        printf("Queue is underflow...\n");
        front = -1;
        rear = -1;
    } else {
        printf("Element %d dequeued from queue\n", queue[front++]);
        if (front > rear) { // Reset when queue is empty
            front = -1;
            rear = -1;
        }
    }
}

void peek(int queue[]) {
    if (front == -1) {
        printf("Queue is underflow...\n");
    } else {
        printf("Front element is %d\n", queue[front]);
    }
}

void display(int queue[]) {
    if (front == -1) {
        printf("Queue is underflow...\n");
    } else {
        printf("Queue elements: ");
        for (int i = front; i <= rear; i++) {
            printf("%d ", queue[i]);
        }
        printf("\n");
    }
}

int main() {
    printf("Enter size of queue: ");
    scanf("%d", &n);
    int queue[n];

    while (1) {
        printf("\n1.Enqueue\n2.Dequeue\n3.Peek\n4.Display\n5.Exit\n");
        int ch;
        printf("Enter your choice: ");
        scanf("%d", &ch);

        switch (ch) {
            case 1: {
                int x;
                printf("Enter element to be enqueued: ");
                scanf("%d", &x);
                enqueue(queue, x);
                break;
            }
            case 2:
                dequeue(queue);
                break;
            case 3:
                peek(queue);
                break;
            case 4:
                display(queue);
                break;
            case 5:
                exit(0);
            default:
                printf("Invalid choice, please try again.\n");
        }
    }
    return 0;
}
